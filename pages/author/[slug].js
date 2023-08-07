import { gql, useQuery } from '@apollo/client';
import React, {useEffect, useState} from 'react';
import { BlogInfoFragment } from '../../fragments/GeneralSettings';
import {
  Header,
  PostsGrid,
  SEO,
} from '../../components';
import { useRouter } from 'next/router';

const RELATED = gql`
  ${BlogInfoFragment}
  query GetRelated (
    $slug: String!
  ) {
    menu(id: "dGVybToxMQ==") {
      menuItems {
        nodes {
          label
          url
          uri
        }
      }
    }
    generalSettings {
      ...BlogInfoFragment
    }
    posts(where: {authorName: $slug}, first: 25)  {
      edges {
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
`;

const Page = () => {

  const router = useRouter();
  const slug = router.query.slug || [];

  const { data } = useQuery(RELATED, {
    variables: {slug},
  });

  const [author, setAuthor] = useState([]);

  useEffect(() => {
    async function fetchAuthors() {
      const response = await fetch(`https://apriatst.artez.nl/wp-json/wp/v2/ppma_author?slug=${slug}`);
      const jsonData = await response.json();
      setAuthor(jsonData[0])
    }
    fetchAuthors()
    
  }, [])

  return (
    <>
    {data &&
      <>
        <SEO
          title={data?.generalSettings.title}
          description={data?.generalSettings.description}
        />
        <Header
          title={data?.generalSettings.title}
          description={data?.generalSettings.description}
          menuItems={data?.menu?.menuItems?.nodes}
        />
        <main className="article">
          <div className="wrap">
            <div className='info-bar'>
              <div className='date'>
                <div className='field'>COUNT</div>
                <div className='data'>{author.count}</div>
              </div>
              <div className='date'>
                <div className='field'>ROLE</div>
                <div className='data'>{author.taxonomy}</div>
              </div>
            </div>
            <h1 className='headline'>{author.name}</h1>
            <div className='intro' dangerouslySetInnerHTML={{ __html: author.acf?.bibliography ?? '' }} />
              <PostsGrid
                posts={data.posts.edges}
              />
          </div>
        </main>
      </>
    }
    </>
  )
}


export default Page
