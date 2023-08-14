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
import React, {useEffect, useState} from 'react';
import Moment from 'moment';

export default function Component(props) {

  const { title: siteTitle, description: siteDescription } =
  props?.data?.generalSettings;
  const posts = props.data?.posts?.edges ?? [];
  const primaryMenu = props.data?.menu?.menuItems?.nodes ?? [];
  const footerMenu = props.data?.footer?.footer?.column ?? [];
  const featuredImage = props.data?.page?.featuredImage?.node ?? [];


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
      <SEO title={siteTitle} description={siteDescription} imageUrl={featuredImage?.mediaItemUrl} />
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
                {props.data.page.homePage.introText}
              </p>
            </div>

            <div
              className="post-highlight-item column2"
              key={props.data.page.homePage.highlight.id ?? ''}
              id={`post-${props.data.page.homePage.highlight.id}`}
            >
              <a href={`/${props.data.page.homePage.highlight.slug}?title=${props.data.page.homePage.highlight.title}&category=${props.data.page.homePage.highlight.categories.nodes[0].name.toLowerCase().replace(' ', '-')}&year=${Moment(props.data.page.homePage.highlight.date).format("YYYY")}${tagsList}`}>
                  <div className='category'>{props.data.page.homePage.highlight.categories.nodes[0].name}</div>
                  <div className='authors'>
                    <div dangerouslySetInnerHTML={{ __html: props.data.page.homePage.highlight.authors.authors ?? '' }} />
                  </div>
                  <img src={props.data.page.homePage.highlight.featuredImage?.node.mediaItemUrl}/>
                  <h1 className='title'>{props.data.page.homePage.highlight.title}</h1>
              </a>
            </div>
         </div>
          <PostsGrid
            posts={posts}
          />
        </Container>
      </Main>
      <Footer title={siteTitle} menuItems={footerMenu} />
    </>
  );
}

Component.query = gql`
  ${BlogInfoFragment}
  query GetPageData {
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