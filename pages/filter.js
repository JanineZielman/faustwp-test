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
  const categories = props.__TEMPLATE_QUERY_DATA__.categories.nodes



  console.log(Array.isArray(router.query.category))

  useEffect(() => {
    filterObject()
  }, [router.query])

  function filterObject(){
    if (router.query.category){
      if (Array.isArray(router.query.category)){
        router.query.category.forEach((element) => {
          const elements = document.querySelectorAll(`.${element}`);
          elements.forEach((element) => {
            element.classList.add('visible');
          });
        });
      } else{
        const elements = document.querySelectorAll(`.${router.query.category}`);
        elements.forEach((element) => {
          element.classList.add('visible');
        });
      }
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
              <>
              {Array.isArray(router.query.category) ?
              <>
                {router.query.category?.map((item, i) => {
                  return(
                    <div className='category left'>
                      {item} <a href={`${router.asPath.replace(`category=${item}`, '')}`}>x</a>
                    </div>
                  )
                })}
              </>
              :
              <div className='category left'>
                {router.query.category} <a href={`${router.asPath.replace(`category=${router.query.category}`, '')}`}>x</a>
              </div>
              }
              </>
          
            :
              <div className='small-title'>Category</div>        
            }
            {categories.map((category, i) => {
              return(
                <a href={`${router.asPath}&category=${category.name.toLowerCase().replace(' ', '-')}`} className='small-title'>{category.name}</a>
              )
            })}
          </div>
          <div className='filter-cat'>
            <div className='small-title'>Year</div>
          </div>
          <div className='filter-cat'>
            <div className='small-title'>Tags</div>
          </div>
        </div>
      </div>
      <div className='filtered'>
        <RelatedGrid
          posts={posts}
        />
      </div>
      </main>
      {/* <Footer title={siteTitle} menuItems={footerMenu} /> */}
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
