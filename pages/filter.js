import React, { useEffect, useState, useMemo } from 'react';
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

// Lazy-load RelatedGrid
const RelatedGrid = dynamic(
  () => import('../components/RelatedGrid').then(mod => mod.RelatedGrid),
  { loading: () => <div className="loading">Loading…</div> }
);

export default function Component() {
  const router = useRouter();

  // Query params
  const category = router.query.category || '';
  const year = parseInt(router.query.year || 0);
  const tag = Array.isArray(router.query.tag) ? router.query.tag : router.query.tag ? [router.query.tag] : [];
  const title = router.query.title || '';
  const authorsQuery = router.query.authors || '';

  // Convert title/authors for search
  const search = useMemo(() => `${title},${authorsQuery}`.replace(/-/g, ' '), [title, authorsQuery]);

  // Apollo client-side query
  const { data, loading: queryLoading } = useQuery(Component.query, {
    variables: { category, year, tag, search },
  });

  // Loading state
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!queryLoading) setLoading(false);
  }, [queryLoading]);

  // Extract all authors from page content safely
  const [allAuthors, setAllAuthors] = useState([]);
  useEffect(() => {
    if (data?.page?.content) {
      const parser = new DOMParser();
      const html = parser.parseFromString(data.page.content, 'text/html');
      const links = html.getElementsByTagName('a');
      const authorsList = Array.from(links)
        .map(el => el.getAttribute('title'))
        .filter(Boolean); // remove nulls
      setAllAuthors(authorsList);
    }
  }, [data]);

  const footerMenu = data?.footer?.footer?.column ?? [];

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
        <div className='left-sidebar'>
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
        <div className='filtered'>
          <RelatedGrid posts={data.posts.edges} />
        </div>
      </main>
      <Footer menuItems={footerMenu} />
    </>
  );
}

// Apollo query
Component.query = gql`
  ${BlogInfoFragment}
  query GetPageData(
    $category: String!
    $search: String!
    $year: Int!
    $tag: [String!]!
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
    categories{
      nodes{
        name
        slug
      }
    }
    tags (first: 500){
      nodes{
        name
        count
      }
      pageInfo {
        endCursor
      }
    }
    posts(where: {categoryName: $category, tagSlugIn: $tag, dateQuery: {year: $year}, search: $search}, first: 100)  {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges{
        node {
          id
          databaseId
          title
          slug
          date
          authors {
            authors
          }
          featuredImage{
            node{
              mediaItemUrl
            }
            cursor
          }
          categories{
            nodes{
              name
              slug
            }
          }
          tags{
            nodes{
              name
            }
          }
        }
      }
    }
  }
`;
