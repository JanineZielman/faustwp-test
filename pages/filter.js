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
        {/* <SEO
          title={siteTitle}
          description={siteDescription}
          imageUrl={featuredImage?.node?.sourceUrl}
        /> */}
        <Header
          title={data.generalSettings.siteTitle}
          description={data.generalSettings.siteDescription}
          menuItems={data?.menu?.menuItems?.nodes}
        />
        <main className="article">
        <div className='left-sidebar'>
          <Filter authors={router.query.authors} categories={data.categories.nodes} tags={data.tags.nodes} tag={router.query.tag} category={router.query.category} path={router.asPath} title={router.query.title} year={router.query.year}/>
        </div>
        <div className='filtered'>
          <RelatedGrid
            posts={data.posts.edges}
          />
        </div>
        </main>
        {/* <Footer title={siteTitle} menuItems={footerMenu} /> */}
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


export function getStaticProps(ctx) {
  return getWordPressProps({ ctx });
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