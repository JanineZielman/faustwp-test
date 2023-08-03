import { getWordPressProps, WordPressTemplate } from '@faustwp/core';
import { useQuery, gql } from '@apollo/client';
import { BlogInfoFragment } from '../fragments/GeneralSettings';
import {
  Header,
  FeaturedImage,
  SEO,
  LinkedItems,
  RelatedGrid,
  Filter
} from '../components';
import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router';

export default function Component() {

  const router = useRouter();
  const category = router.query.category || '';
  const year = parseInt(router.query.year || 0);
  const tag = router.query.tag || [];
  const title = router.query.title || '';

  
  const { data } = useQuery(Component.query, {
    variables: {category, year, tag, title},
  });


  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (data){
      setLoading(false);
    }
  },[data])


  return (
    <>
      {loading ?
        <>loading...</>
      :
        <>
        <div className='background-animation'>
          <div className="bg-blob1"></div>
          <div className="bg-blob2"></div>
          <div className="bg-blob3"></div>
        </div>
        <main className="article flowchart-wrapper">
          <center>
            <div className='flowchart'>
              <h1>Where can I develop, enrich and improve my research outside my own course?</h1>
              <div className='options'>
                <div>
                  <p>Find <a href="#">opportunities</a> to develop, enrich and improve your research outside your own course.</p>
                </div>
                <div>
                  <p>Are you looking for <a href="#">inspiration</a>,  <a href="#">coaching</a>, or do you want to <a href="#">share your research?</a></p>
                </div>
              </div>
            </div>
          </center>
        </main>
        </>
      }
    </>
  );
}


Component.variables = (ctx) => {
  return {
    asPreview: ctx?.asPreview,
  };
};


export async function getServerSideProps(){
  return {
    props: {
      paths: [],
      fallback: 'blocking',
    }
  };

}

Component.query = gql`
  ${BlogInfoFragment}
  query GetPageData(
    $category: String!
    $title: String!
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
    categories{
      nodes{
        name
      }
    }
    tags (first: 100){
      nodes{
        name
      }
    }
    posts(where: {categoryName: $category, tagSlugIn: $tag, dateQuery: {year: $year}, search: $title}, first: 100)  {
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