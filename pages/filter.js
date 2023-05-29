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
  const subject = router.query.subject || '';
  console.log(subject)
  const { data } = useQuery(Component.query, {
    variables: {category, year, tag, subject},
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
          <Filter categories={data.categories.nodes} tags={data.tags.nodes} tag={router.query.tag} category={router.query.category} path={router.asPath} subject={router.query.subject} year={router.query.year}/>
        </div>
        <div className='filtered'>
          <RelatedGrid
            posts={data.posts.nodes}
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
    $subject: String!
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
    tags{
      nodes{
        name
      }
    }
    posts(where: {categoryName: $category, tagSlugIn: $tag, dateQuery: {year: $year}, search: $subject}, first: 100)  {
      nodes {
        id
        title
        slug
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
      }
    }
  }
`;