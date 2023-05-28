import { getWordPressProps, WordPressTemplate } from '@faustwp/core';
import { gql } from '@apollo/client';
import { BlogInfoFragment } from '../fragments/GeneralSettings';
import {
  Header,
  FeaturedImage,
  SEO,
  Collapsible,
  LinkedItems,
  RelatedGrid
} from '../components';
import Moment from 'moment';
import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router';

export default function Component(props) {
  // Loading state for previews
  if (props.loading) {
    return <>Loading...</>;
  }

  const router = useRouter();

  const { title: siteTitle, description: siteDescription } =
    props?.__TEMPLATE_QUERY_DATA__?.generalSettings;
  const primaryMenu = props.__TEMPLATE_QUERY_DATA__?.menu?.menuItems?.nodes ?? [];
  const posts = props.__TEMPLATE_QUERY_DATA__.posts.nodes


  console.log(router)

  useEffect(() => {
    filterObject()
  }, [router.query])

  function filterObject(){
    if (router.query.category){
      const elements = document.querySelectorAll(`:not(.${router.query.category})`);
      elements.forEach((element) => {
        element.classList.add('non-active');
      });
    }
  }


  return (
    <>
      {/* <SEO
        title={siteTitle}
        description={siteDescription}
        imageUrl={featuredImage?.node?.sourceUrl}
      /> */}
      <Header
        title={siteTitle}
        description={siteDescription}
        menuItems={primaryMenu}
      />
      <main className="article">
      <div className='left-sidebar'>
        <div className='filter'>
          <div className='filter-cat'>
            <div className='small-title'>Jane Doe</div>
          </div>
          <div className='filter-cat'>
            <div className='small-title'>Subject</div>
          </div>
          <div className='filter-cat'>
            {router.query.category ?
              <div className='category left'>
                {router.query.category}
              </div>
            :
              <div className='small-title'>Category</div>
            }
          </div>
          <div className='filter-cat'>
            <div className='small-title'>Year</div>
          </div>
          <div className='filter-cat'>
            <div className='small-title'>Tags</div>
          </div>
        </div>
      </div>
        <RelatedGrid
          posts={posts}
        />
      </main>
      {/* <Footer title={siteTitle} menuItems={footerMenu} /> */}
    </>
  );
}

Component.query = gql`
  ${BlogInfoFragment}
  ${FeaturedImage.fragments.entry}
  query GetPost(
    $databaseId: ID!
    $asPreview: Boolean = false
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
    posts(first: 100)  {
      nodes {
        title
        content
        date
        author {
          node {
            name
          }
        }
        categories {
          nodes {
            name
          }
        }
        tags {
          nodes {
            name
          }
        }
        articleTop {
          doi
          previewText
          subtitle
        }
        intro {
          intro
          embed
          bigImage {
            sourceUrl
          }
        }
        linkedItems {
          linkedItems {
            ... on Post {
              id
              title
              slug
            }
          }
        }
        linkedCollection {
          linkedCollection {
            ... on Post {
              id
              title
              linkedItems {
                linkedItems {
                  ... on Post {
                    id
                    title
                    slug
                  }
                }
              }
            }
          }
        }
      }
    }
    generalSettings {
      ...BlogInfoFragment
    }
  }
`;

Component.variables = ({ databaseId, slug }, ctx) => {
  return {
    slug,
    databaseId,
    asPreview: ctx?.asPreview,
  };
};


export function getStaticProps(ctx) {
  return getWordPressProps({ ctx });
}
