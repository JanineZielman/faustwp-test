import React, { useEffect, useState, useMemo, useRef } from 'react';
import { useQuery, gql } from '@apollo/client';
import { useRouter } from 'next/router';
import { BlogInfoFragment } from '../fragments/GeneralSettings';
import dynamic from 'next/dynamic';
import {
  Header,
  Filter,
  SEO,
  Footer,
  Loader
} from '../components';

const RelatedGrid = dynamic(
  () => import('../components/RelatedGrid').then(mod => mod.RelatedGrid),
  { loading: () => <div className="loading">Loading…</div> }
);

const POSTS_PER_PAGE = 10;

export default function Component() {
  const router = useRouter();

  // Query params
  const category = router.query.category || '';
  const year = parseInt(router.query.year || 0);
  const tag = Array.isArray(router.query.tag)
    ? router.query.tag
    : router.query.tag
      ? [router.query.tag]
      : [];
  const title = router.query.title || '';
  const authorsQuery = router.query.authors || '';

  // Convert title/authors to WP search
  const search = useMemo(
    () => `${title},${authorsQuery}`.replace(/-/g, ' '),
    [title, authorsQuery]
  );

  // Main query
  const { data, loading: queryLoading, fetchMore } = useQuery(
    Component.query,
    {
      variables: {
        category,
        year,
        tag,
        search,
        first: POSTS_PER_PAGE,
      },
      notifyOnNetworkStatusChange: true,
    }
  );

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!queryLoading) setLoading(false);
  }, [queryLoading]);

  // Extract authors from page content
  const [allAuthors, setAllAuthors] = useState([]);
  useEffect(() => {
    if (data?.page?.content) {
      const parser = new DOMParser();
      const html = parser.parseFromString(data.page.content, 'text/html');
      const links = html.getElementsByTagName('a');
      const authorsList = Array.from(links)
        .map(el => el.getAttribute('title'))
        .filter(Boolean);
      setAllAuthors(authorsList);
    }
  }, [data]);

  const footerMenu = data?.footer?.footer?.column ?? [];

  // =============================
  //   INFINITE SCROLL (SAFE)
  // =============================
  const lastCursorRef = useRef(null);
  const isFetchingRef = useRef(false);

  useEffect(() => {
    if (!data) return;

    const handleScroll = () => {
      if (isFetchingRef.current) return;

      const pageInfo = data.posts?.pageInfo;
      if (!pageInfo?.hasNextPage) return;

      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 600;

      if (!nearBottom) return;

      const { endCursor } = pageInfo;

      // Prevent fetching the same page again
      if (lastCursorRef.current === endCursor) return;
      lastCursorRef.current = endCursor;

      isFetchingRef.current = true;

      fetchMore({
        variables: {
          after: endCursor,
          first: POSTS_PER_PAGE,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          isFetchingRef.current = false;
          if (!fetchMoreResult) return prev;

          const merged = [
            ...prev.posts.edges,
            ...fetchMoreResult.posts.edges,
          ];

          // Remove duplicates
          const unique = merged.filter(
            (post, index, arr) =>
              index === arr.findIndex(p => p.node.id === post.node.id)
          );

          return {
            ...prev,
            posts: {
              ...fetchMoreResult.posts,
              edges: unique,
            },
          };
        },
      }).finally(() => {
        isFetchingRef.current = false;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  }, [data, fetchMore]);

  if (loading) return <Loader />;

  return (
    <>
      <SEO
        title={data.generalSettings.siteTitle}
        description={data.generalSettings.siteDescription}
      />

      <Header
        title={data.generalSettings.siteTitle}
        description={data.generalSettings.siteDescription}
        menuItems={data?.menu?.menuItems?.nodes}
      />

      <main className="article">
        <div className="left-sidebar">
          <Filter
            allAuthors={allAuthors}
            authors={authorsQuery}
            categories={data.categories.nodes}
            tags={data.tags.nodes}
            tag={tag}
            category={category}
            path={router.asPath}
            title={title}
            year={year}
          />
        </div>

        <div className="filtered">
          <RelatedGrid posts={data.posts.edges} />

          {data.posts.pageInfo.hasNextPage && (
            <div className="loading-more">Loading more posts…</div>
          )}
        </div>
      </main>

      <Footer menuItems={footerMenu} />
    </>
  );
}

Component.query = gql`
  ${BlogInfoFragment}
  query GetPageData(
    $category: String!
    $search: String!
    $year: Int!
    $tag: [String!]!
    $first: Int!
    $after: String
  ) {
    generalSettings {
      ...BlogInfoFragment
    }
    menu(id: "dGVybToxMQ==") {
      menuItems {
        nodes {
          label
          url
          uri
        }
      }
    }
    footer: page(id: "footer", idType: URI) {
      footer {
        column {
          text
        }
      }
    }
    page: page(id: "cG9zdDo2ODk5") {
      content
    }
    categories {
      nodes {
        name
        slug
      }
    }
    tags(first: 500) {
      nodes {
        name
        count
      }
      pageInfo {
        endCursor
      }
    }
    posts(
      where: {
        categoryName: $category
        tagSlugIn: $tag
        dateQuery: { year: $year }
        search: $search
      }
      first: $first
      after: $after
    ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          id
          databaseId
          title
          slug
          date
          authors {
            authors
          }
          featuredImage {
            node {
              mediaItemUrl
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
          tags {
            nodes {
              name
            }
          }
        }
      }
    }
  }
`;
