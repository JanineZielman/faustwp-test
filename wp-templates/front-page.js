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
            APRIA: ArtEZ Platform for Research Interventions of the Arts is an online platform that curates a peer-reviewed journal (APRIA journal) and publishes high-impact essays, image and sound contributions that examine art and interventions of the arts in relation to science and society, and that encourage dialogue around themes that are critical and urgent to the futures that we will live in.
          </p>
        </div>

        <div
          className="post-highlight-item column2"
          key={posts[0].node.id ?? ''}
          id={`post-${posts[0].node.id}`}
        >
          <Link href={`/posts/${posts[0].node.slug}?title=${posts[0].node.title}&category=${posts[0].node.categories.nodes[0].name.toLowerCase().replace(' ', '-')}&year=${Moment(posts[0].node.date).format("YYYY")}${tagsList}`}>
            <a>
              <div className='category'>{posts[0].node.categories.nodes[0].name}</div>
              <div className='authors'></div>
              <img src={posts[0].node.featuredImage?.node.mediaItemUrl}/>
              <h1 className='title'>{posts[0].node.title}</h1>
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
    posts(first:100)  {
      edges{
        node {
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