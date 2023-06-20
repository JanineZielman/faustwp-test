import { useQuery, gql } from '@apollo/client';
import * as MENUS from '../constants/menus';
import { BlogInfoFragment } from '../fragments/GeneralSettings';
import {
  Header,
  Footer,
  Main,
  Container,
  NavigationMenu,
  Hero,
  SEO,
  PostsGrid,
} from '../components';
import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import Moment from 'moment';

export default function Component() {
  const { data } = useQuery(Component.query);

  const { title: siteTitle, description: siteDescription } =
    data?.generalSettings;
  const primaryMenu = data?.menu?.menuItems?.nodes ?? [];
  // const footerMenu = data?.footerMenuItems?.nodes ?? [];
  const posts = data?.posts?.edges ?? [];

  let tags = '';
  const [tagsList, setTagsList] = useState('')
  useEffect(() => {
    if(posts[0].node.tags){
      for (let i = 0; i < posts[0].node.tags.nodes.length; i++) {
        tags += `&tag=${posts[0].node.tags.nodes[i].name.toLowerCase()}`;
      }
      setTagsList(tags);
    }
  }, [tagsList])


  return (
    <>
      <SEO title={siteTitle} description={siteDescription} />
      <div  className={'front-page'}>
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
                  <svg className="apria_logo" width="100%" height="100%" viewBox="0 0 100 100"><circle cx="50%" cy="50%" r="50"></circle></svg>
                </a>
              </div>
              <p className='title'>
                {data.page.homePage.introText}
              </p>
            </div>

            <div
              className="post-highlight-item column2"
              key={data.page.homePage.highlight.id ?? ''}
              id={`post-${data.page.homePage.highlight.id}`}
            >
              <Link href={`/posts/${data.page.homePage.highlight.slug}?title=${data.page.homePage.highlight.title}&category=${data.page.homePage.highlight.categories.nodes[0].name.toLowerCase().replace(' ', '-')}&year=${Moment(data.page.homePage.highlight.date).format("YYYY")}${tagsList}`}>
                <a>
                  <div className='category'>{data.page.homePage.highlight.categories.nodes[0].name}</div>
                  <div className='authors'>
                    <div dangerouslySetInnerHTML={{ __html: data.page.homePage.highlight.authors.authors ?? '' }} />
                  </div>
                  <img src={data.page.homePage.highlight.featuredImage?.node.mediaItemUrl}/>
                  <h1 className='title'>{data.page.homePage.highlight.title}</h1>
                </a>
              </Link>
            </div>
         </div>
          <PostsGrid
            posts={posts}
          />
        </Container>
      </Main>
      {/* <Footer title={siteTitle} menuItems={footerMenu} /> */}
    </>
  );
}

Component.query = gql`
  ${BlogInfoFragment}
  query GetPageData {
    generalSettings {
      ...BlogInfoFragment
    }
    page(id: "cG9zdDo0MTQ") {
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
    categories{
      nodes{
        name
      }
    }
    posts(where: {tagSlugIn: "collection"},first:100)  {
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