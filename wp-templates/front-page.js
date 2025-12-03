import React, { useEffect, useState, useMemo } from 'react';
import { useQuery, gql } from '@apollo/client';
import Moment from 'moment';
import dynamic from 'next/dynamic';
import {
  Header,
  Footer,
  Main,
  Container,
  SEO,
  Loader
} from '../components';
import { BlogInfoFragment } from '../fragments/GeneralSettings';

const PostsGrid = dynamic(
  () => import('../components/PostsGrid').then(mod => mod.PostsGrid),
  { loading: () => <div className="loading">Loading…</div> }
);

const POSTS_PER_PAGE = 10;

export default function Component() {
  const { data, loading: queryLoading, fetchMore } = useQuery(Component.query, {
    variables: { first: POSTS_PER_PAGE },
    notifyOnNetworkStatusChange: true,
  });

  const [loading, setLoading] = useState(true);

  // Always call hooks first
  const highlight = data?.page?.homePage?.highlight ?? null;

  const highlightTags = useMemo(() => {
    if (!highlight?.tags?.nodes) return '';
    return highlight.tags.nodes.map(t => `&tag=${t.name.toLowerCase()}`).join('');
  }, [highlight]);

  useEffect(() => {
    if (!queryLoading) setLoading(false);
  }, [queryLoading]);

  // Infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      if (
        !data?.posts?.pageInfo?.hasNextPage ||
        window.innerHeight + window.scrollY < document.body.offsetHeight - 500
      ) return;

      fetchMore({
        variables: { first: POSTS_PER_PAGE, after: data.posts.pageInfo.endCursor },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          return {
            ...prev,
            posts: {
              ...fetchMoreResult.posts,
              edges: [...prev.posts.edges, ...fetchMoreResult.posts.edges],
            },
          };
        },
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [data, fetchMore]);

  if (loading) return <Loader />;

  const siteTitle = data.generalSettings?.title ?? '';
  const siteDescription = data.generalSettings?.description ?? '';
  const posts = data.posts?.edges ?? [];
  const primaryMenu = data.menu?.menuItems?.nodes ?? [];
  const footerMenu = data.footer?.footer?.column ?? [];
  const featuredImage = data.page?.featuredImage?.node ?? null;

  return (
    <>
      <SEO
        title={siteTitle}
        description={siteDescription}
        imageUrl={featuredImage?.mediaItemUrl}
      />
      <div className={'front-page'}>
        <Header
          title={siteTitle}
          description={siteDescription}
          menuItems={primaryMenu}
        />
      </div>
      <Main>
        <Container>
          <div className='flex align-center'>
            <div className='column1'>
              <div className="logo-container">
                <a href="/" className="logo">
                  <svg className="apria_logo" width="100%" height="100%" viewBox="0 0 100 100">
                    <circle cx="50%" cy="50%" r="50"></circle>
                  </svg>
                </a>
              </div>
              <p className='title'>{data.page.homePage.introText}</p>
            </div>

            {highlight && (
              <div
                className="post-highlight-item column2"
                key={highlight.id}
                id={`post-${highlight.id}`}
              >
                <a
                  href={`/${highlight.slug}?title=${highlight.title}&category=${highlight.categories.nodes[0].slug}&year=${Moment(highlight.date).format('YYYY')}${highlightTags}`}
                >
                  <div className='category'>{highlight.categories.nodes[0].name}</div>
                  <div className='authors'>
                    <div dangerouslySetInnerHTML={{ __html: highlight.authors.authors ?? '' }} />
                  </div>
                  <img src={highlight.featuredImage?.node.mediaItemUrl} />
                  <h1 className='title'>{highlight.title}</h1>
                </a>
              </div>
            )}
          </div>

          <PostsGrid posts={posts} />
          {data.posts?.pageInfo?.hasNextPage && (
            <div className="loading-more">Loading more posts…</div>
          )}
        </Container>
      </Main>
      <Footer title={siteTitle} menuItems={footerMenu} />
    </>
  );
}

Component.query = gql`
  ${BlogInfoFragment}
  query GetHomePageData($first: Int = 10, $after: String) {
    generalSettings {
      ...BlogInfoFragment
    }
    page: page(id: "cG9zdDo0MTQ") {
      featuredImage{
        node{
          mediaItemUrl
        }
      }
      homePage {
        introText
        highlight {
          ... on Post {
            id
            databaseId
            title
            slug
            date
            featuredImage{
              node{
                mediaItemUrl
              }
            }
            authors {
              authors
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
    categories{
      nodes{
        name
        slug
      }
    }
    posts(
      where: {
        tagSlugIn: ["collection", "current"],
        categoryNotIn: [846]
      },
      first: $first,
      after: $after
    )  {
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
