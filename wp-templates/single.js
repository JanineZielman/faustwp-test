import { gql, useQuery } from '@apollo/client';
import { BlogInfoFragment } from '../fragments/GeneralSettings';
import {
  Header,
  FeaturedImage,
  SEO,
  Collapsible,
  LinkedItems,
  RelatedGrid,
  Filter,
  Footer,
  Loader
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
          }
          categories{
            nodes{
              name
              slug
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

export default function Component(props) {
  // Loading state for previews
  if (props.loading) {
    return <Loader/>;
  }

  const router = useRouter();
  const tag = router.query.tag || [];

  const { data } = useQuery(RELATED, {
    variables: {tag},
  });


  const { title: siteTitle, description: siteDescription } =
    props?.data?.generalSettings;
  const { title, content, featuredImage, date, author, articleTop, intro, linkedItems, linkedCollection, linkedCuratedBy} = props.data.post;
  const primaryMenu = props.data?.menu?.menuItems?.nodes ?? [];
  const categories = props.data.categories.nodes;
  const tags = props.data.tags.nodes;
  const footerMenu = props.data?.footer?.footer?.column ?? [];


  const regexMdLinks = /(?:\])(.*?)(?=\[\/footnote])/gm;
  const footnotes = content?.match(regexMdLinks);
  
  const [newContent, setNewContent] = useState(null);

  useEffect(() => {
    if (footnotes){
      for (let i = 0; i < footnotes?.length; i++) { 
        setNewContent(content.replaceAll(regexMdLinks, '').replaceAll('[/footnote]', '</sup></a>').replaceAll('[footnote', '<a href="#footnotes"><sup>').replaceAll(']', ''))
      }
    } else {
      setNewContent(content)
    }
  }, [newContent])

  const [linkedColandCur, setLinkedColandCur] = useState(null);
  const [uniquelinkedColandCur, setUniquelinkedColandCur] = useState(null);

  useEffect(() => {
    
    setLinkedColandCur(linkedCollection?.linkedCollection?.linkedItems?.linkedItems.concat(linkedCuratedBy?.linkedCuratedBy ? linkedCuratedBy?.linkedCuratedBy?.linkedItems?.linkedItems : linkedCollection?.linkedCollection?.linkedItems?.linkedItems))
    
    if (linkedColandCur){
      setUniquelinkedColandCur([...new Map(linkedColandCur.map(v => [v.id, v])).values()])
    }
  }, [linkedColandCur])


  return (
    <>
      <SEO
        title={`APRIA | ${title}`}
        description={intro.intro ? intro.intro.replace(/<[^>]+>/g, '') : siteDescription}
        imageUrl={featuredImage?.node?.sourceUrl}
      />
      <Header
        title={`APRIA | ${title}`}
        description={intro.intro ? intro.intro.replace(/<[^>]+>/g, '') : siteDescription}
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
                <div className='data'>
                  <a href={`${linkedCollection.linkedCollection?.slug}?`}>{linkedCollection.linkedCollection?.title}</a>
                </div>
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
          {/* {intro.bigImage && <iframe className='big-image' src={intro.embed}/>} */}
          {intro.embed && <iframe className='big-image' src={intro.embed}/>}
          <div className='main-wrapper'>
              <div className='left-sidebar'>
                <Filter authors={router.query.authors} tag={router.query.tag} tags={tags} categories={categories} title={router.query.title} category={router.query.category} year={router.query.year} path={router.asPath.replace(/^.+\?/,'/filter?')}/>
              </div>
              <div className='content-wrapper'>
                <div className='intro' dangerouslySetInnerHTML={{ __html: intro.intro ?? '' }} />
                <div className='content' dangerouslySetInnerHTML={{ __html: newContent ?? '' }} />
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
                  <LinkedItems props={linkedItems.linkedItems}/>
                }
                {uniquelinkedColandCur &&
                  <LinkedItems props={uniquelinkedColandCur}/>
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
      <Footer title={siteTitle} menuItems={footerMenu} />
    </>
  );
}

Component.variables = ({ databaseId}, ctx) => {
  return {
    databaseId,
    asPreview: false,
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
        slug
      }
    }
    tags (first: 100){
      nodes{
        name
      }
    }
    footer: page(id: "footer", idType: URI) {
      footer {
        column {
          text
        }
      }
    }
    post(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      databaseId
      title
      content
      date
      author {
        node {
          name
        }
      }
      authors {
        authors
      }
      categories {
        nodes {
          name
          slug
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
            databaseId
            title
            slug
            date
            authors {
              authors
            }
            categories {
              nodes {
                name
                slug
              }
            }
            tags {
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
            databaseId
            title
            slug
            linkedItems {
              linkedItems {
                ... on Post {
                  id
                  databaseId
                  title
                  slug
                  date
                  authors {
                    authors
                  }
                  categories {
                    nodes {
                      name
                      slug
                    }
                  }
                  tags {
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
      linkedCuratedBy {
        linkedCuratedBy {
          ... on Post {
            id
            databaseId
            title
            slug
            linkedItems {
              linkedItems {
                ... on Post {
                  id
                  databaseId
                  title
                  slug
                  date
                  authors {
                    authors
                  }
                  categories {
                    nodes {
                      name
                      slug
                    }
                  }
                  tags {
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
