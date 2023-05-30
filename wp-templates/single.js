import { gql, useQuery } from '@apollo/client';
import { BlogInfoFragment } from '../fragments/GeneralSettings';
import {
  Header,
  FeaturedImage,
  SEO,
  Collapsible,
  LinkedItems,
  RelatedGrid,
  Filter
} from '../components';
import Moment from 'moment';
import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router';

const RELATED = gql`
  query GetRelated (
    $tag: [String!]!
  ) {
    posts(where: {tagSlugIn: $tag}, first: 25)  {
      edges {
        node {
          id
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
        }
      }
    }
  }
`;

export default function Component(props) {
  // Loading state for previews
  if (props.loading) {
    return <>Loading...</>;
  }

  const router = useRouter();
  const tag = router.query.tag || [];

  const { data } = useQuery(RELATED, {
    variables: {tag},
  });


  const { title: siteTitle, description: siteDescription } =
    props?.data?.generalSettings;
  const { title, content, featuredImage, date, author, articleTop, intro, linkedItems, linkedCollection} = props.data.post;
  const primaryMenu = props.data?.menu?.menuItems?.nodes ?? [];
  const categories = props.data.categories.nodes;
  const tags = props.data.tags.nodes;


  const regexMdLinks = /(?<=\[footnote)(.*?)(?=\[\/footnote])/gm;
  const footnotes = content?.match(regexMdLinks);
  
  const [newContent, setNewContent] = useState('');

  useEffect(() => {
    for (let i = 0; i < footnotes?.length; i++) { 
      setNewContent(content.replace(footnotes[i], footnotes[i].split(']')[0]))
    }
  })

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
                <div className='data'>{linkedCollection.linkedCollection?.title}</div>
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
                <Filter tag={router.query.tag} tags={tags} categories={categories} title={title} category={router.query.category} year={Moment(date).format("YYYY")} path={router.asPath.replace(/^.+\?/,'/filter?')}/>
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
                {linkedItems?.linkedItems &&
                  <LinkedItems props={linkedItems.linkedItems} title={title} year={Moment(date).format("YYYY")} />
                }
                {linkedCollection?.linkedCollection &&
                  <LinkedItems props={linkedCollection.linkedCollection?.linkedItems.linkedItems} title={linkedCollection.linkedCollection?.title} year={Moment(date).format("YYYY")}/>
                }
              </div>
          </div>
          <br/><br/>
          <div className='related-grid'>
            <h2 className='title related'>Related content</h2> 
          </div>
          {data &&
            <RelatedGrid
              posts={data.posts.edges}
            />
          }
        </div>
      </main>
      {/* <Footer title={siteTitle} menuItems={footerMenu} /> */}
    </>
  );
}

Component.variables = ({ databaseId}, ctx) => {
  return {
    databaseId,
    asPreview: ctx?.asPreview,
  };
};

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
    post(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
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
            categories {
              nodes {
                name
              }
            }
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
                  categories {
                    nodes {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
      ...FeaturedImageFragment
    }
    generalSettings {
      ...BlogInfoFragment
    }
  }
`;
