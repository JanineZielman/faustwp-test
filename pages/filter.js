import { getWordPressProps, WordPressTemplate } from '@faustwp/core';
import { gql } from '@apollo/client';
import { BlogInfoFragment } from '../fragments/GeneralSettings';
import {
  Header,
  FeaturedImage,
  SEO,
  LinkedItems,
  RelatedGrid,
  Filter
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


  useEffect(() => {
    filterObject()
  }, [router.query])

  function filterObject(){
    console.log(Object.keys(router.query).length)
    if (Object.keys(router.query).length > 0){
      const category = router.query.category || ''
      const year = router.query.year || ''
      const elements = document.querySelectorAll(`${category && '.' + category}${year && '.' + year}`);
      console.log(elements)
      elements.forEach((element) => {
        element.classList.add('visible');
      });
      // Object.keys(router.query).forEach((filter) => {
      //   const filterTag = router.query[filter]
      //   console.log(filterTag)
      //   const elements = document.querySelectorAll(`.${filterTag}`);
      //   // console.log(elements)
      //   elements.forEach((element) => {
      //     element.classList.add('visible');
      //   });
      // });
    }
    // if (router.query.category){
    //   if (Array.isArray(router.query.category)){
    //     router.query.category.forEach((element) => {
    //       const elements = document.querySelectorAll(`.${element}`);
    //       elements.forEach((element) => {
    //         element.classList.add('visible');
    //       });
    //     });
    //   } else{
    //     const elements = document.querySelectorAll(`.${router.query.category}`);
    //     elements.forEach((element) => {
    //       element.classList.add('visible');
    //     });
    //   }
    // }
    // if (router.query.year){
    //   if (Array.isArray(router.query.year)){
    //     router.query.year.forEach((element) => {
    //       const elements = document.querySelectorAll(`.year${element}`);
    //       elements.forEach((element) => {
    //         element.classList.add('visible');
    //       });
    //     });
    //   } else{
    //     const elements = document.querySelectorAll(`.year${router.query.year}`);
    //     elements.forEach((element) => {
    //       element.classList.add('visible');
    //     });
    //   }
    // }
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
        <Filter categories={categories} category={router.query.category} path={router.asPath} subject={router.query.subject} year={router.query.year}/>
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
