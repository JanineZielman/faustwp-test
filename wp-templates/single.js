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

export default function Component(props) {
  // Loading state for previews
  if (props.loading) {
    return <>Loading...</>;
  }

  const { title: siteTitle, description: siteDescription } =
    props?.data?.generalSettings;
  const { title, content, featuredImage, date, author, articleTop, intro, linkedItems, linkedCollection } = props.data.post;
  const primaryMenu = props.data?.menu?.menuItems?.nodes ?? [];


  const regexMdLinks = /(?<=\[footnote)(.*?)(?=\[\/footnote])/gm;
  const footnotes = content?.match(regexMdLinks);


  // const regexMdLinks2 = /(?<=\[footnote)(.*?)(?=\[\/footnote])/gm;
  // const test = content.match(regexMdLinks2);
  
  // const [newContent, setNewContent] = useState('');

  // useEffect(() => {
  //   for (let i = 0; i < footnotes.length; i++) { 
  //     setNewContent(content.replace(footnotes[i], footnotes[i].split(']')[0]))
  //   }
  // })

  // console.log('links', test[0].split(']')[0])

  // for (let i = 0; i < footnotes.length; i++) { 
  //   console.log(test[i].split(']')[0])
  // }

  console.log(props)


  return (
    <>
      <SEO
        title={siteTitle}
        description={siteDescription}
        imageUrl={featuredImage?.node?.sourceUrl}
      />
      <Header
        title={siteTitle}
        description={siteDescription}
        menuItems={primaryMenu}
      />
      <main className="article">
        <div className="wrap">
          <div className='info-bar'>
            {date &&
              <div className='date'>
                <div className='field'>DATE</div>
                <div className='data'>{Moment(date).format("DD-MM-YYYY")}</div>
              </div>
            }
            {linkedCollection.linkedCollection &&
              <div className='date'>
                <div className='field'>Published in</div>
                <div className='data'>{linkedCollection.linkedCollection.title}</div>
              </div>
            }
            {articleTop.doi &&
              <div className='date'>
                <div className='field'>DOI</div>
                <div className='data'>{articleTop.doi}</div>
              </div>
            }
          </div>
          <h1 className='headline'>{title}</h1>
          <div className='intro' dangerouslySetInnerHTML={{ __html: intro.intro ?? '' }} />
          {intro.embed && <iframe className='big-image' src={intro.embed}/>}
          <div className='main-wrapper'>
              <div className='left-sidebar'>
                <img src="/filter.svg"/>
              </div>
              <div className='content-wrapper'>
                <div className='content' dangerouslySetInnerHTML={{ __html: content ?? '' }} />
                {footnotes && 
                  <Collapsible trigger="Footnotes" idname={'footnotes'}>
                    <ul className='footnotes'>
                      {footnotes.map((item, i) => {
                        return(
                          <li dangerouslySetInnerHTML={{ __html: item.replaceAll(/[0-9]/g, '').replaceAll(']', '').replaceAll('about:blank', '#') ?? '' }}/>
                        )
                      })}
                    </ul>
                  </Collapsible>
                }
              </div>
              <div className='right-sidebar'>
                {linkedItems &&
                  <LinkedItems props={linkedItems.linkedItems}/>
                }
                {linkedCollection &&
                  <LinkedItems props={linkedCollection.linkedCollection?.linkedItems.linkedItems}/>
                }
              </div>
          </div>
          <RelatedGrid
            posts={props.data.posts.nodes}
          />
        </div>
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
    post(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      content
      date
      author {
        node {
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
      ...FeaturedImageFragment
    }
    posts(first: 12)  {
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
    generalSettings {
      ...BlogInfoFragment
    }
  }
`;

Component.variables = ({ databaseId }, ctx) => {
  return {
    databaseId,
    asPreview: ctx?.asPreview,
  };
};
