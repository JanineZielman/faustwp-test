import { useQuery, gql } from '@apollo/client';
import { BlogInfoFragment } from '../fragments/GeneralSettings';
import {
  Header,
  FeaturedImage,
  SEO,
  RelatedGrid,
  Filter,
  Footer,
  Loader
} from '../components';
import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router';

export default function Component() {

  const router = useRouter();
  const category = router.query.category || '';
  const year = parseInt(router.query.year || 0);
  const tag = router.query.tag || [];
  const title = router.query.title || '';
  const authors = router.query.authors || '';

  function stringReplace(sentence) {
    return sentence.replace(/[-]/g, " ");
  }

  const search = stringReplace(title + "," + authors);

  const { data } = useQuery(Component.query, {
    variables: {category, year, tag, search},
  });

  const footerMenu = data?.footer?.footer?.column ?? [];

  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (data){
      setLoading(false);
    }
  },[data])

  const convertStringToHTML = htmlString => {
    const parser = new DOMParser();
    const html = parser.parseFromString(htmlString, 'text/html');

    return html.body;
  }

  const [allAuthors, setAllAuthors] = useState([])

  useEffect(() => {
    if (data){
      const list = convertStringToHTML(data.page.content).getElementsByTagName('a')
      for (let i = 0; i < list.length; i++) {
        allAuthors.push(list[i].getAttribute('title'))
      }
    }
  },[data])



  return (
    <>
      {loading ?
       <Loader/>
      :
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
          <Filter allAuthors={allAuthors} authors={router.query.authors} categories={data.categories.nodes} tags={data.tags.nodes} tag={router.query.tag} category={router.query.category} path={router.asPath} title={router.query.title} year={router.query.year}/>
        </div>
        <div className='filtered'>
          <RelatedGrid
            posts={data.posts.edges}
          />
        </div>
        </main>
        <Footer menuItems={footerMenu} />
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