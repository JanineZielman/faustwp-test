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
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const RELATED = gql`
  query GetRelated (
    $tag: [String!]!
    $categoryIn: [ID]
    $categoryNotIn: [ID]
  ) {
    posts(
      where: {
        tagSlugIn: $tag
        categoryIn: $categoryIn
        categoryNotIn: $categoryNotIn
      },
      first: 25
    ) {
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
          featuredImage {
            node {
              mediaItemUrl
            }
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
`;

export default function Component(props) {
  // Loading state for previews
  if (props.loading) {
    return <Loader />;
  }

  const router = useRouter();
  const tag = router.query.tag || [];

  const allCategories = props.data.categories.nodes;
  const selectedCategorySlug = router.query.category || null;

  const selectedCategory = allCategories.find(
    (cat) => cat.slug === selectedCategorySlug
  );

  const CATEGORY_846_ID = 846;
  const CATEGORY_846_SLUG = 'out-of-theory'; // 🔁 REPLACE this with actual slug for ID 846

  const isCategory846 = selectedCategory?.slug === CATEGORY_846_SLUG;

  const queryVariables = {
    tag,
    categoryIn: isCategory846 ? [CATEGORY_846_ID] : [],
    categoryNotIn: isCategory846 ? [] : [CATEGORY_846_ID],
  };

  const { data } = useQuery(RELATED, {
    variables: queryVariables,
  });


  const { title: siteTitle, description: siteDescription } =
    props?.data?.generalSettings;
  const { title, content, featuredImage, date, articleTop, intro, bibliography, linkedItems, linkedCollection, linkedCuratedBy, accordion} = props.data.post;
  const primaryMenu = props.data?.menu?.menuItems?.nodes ?? [];
  const categories = props.data.categories.nodes;
  const tags = props.data.tags.nodes;
  const footerMenu = props.data?.footer?.footer?.column ?? [];


  const regexMdLinks = /(?:\[footnote)(.*?)(?=\[\/footnote\])/gm;


  const footnotes = content?.match(regexMdLinks);
  
  const [newContent, setNewContent] = useState(null);


  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    async function fetchAuthors() {
      const response = await fetch(`https://apria-cms.artez.nl/wp-json/wp/v2/ppma_author?slug=${router.query.authors}`);
      const jsonData = await response.json();
      setAuthors(jsonData)
    }
    fetchAuthors()
    
  }, [])

  useEffect(() => {
    if (footnotes){
      // setNewContent(content.replaceAll('[/footnote]', '</sup>').replaceAll('[footnote', '<sup id="sup" onclick="location.href=`#footnotes`" >').replaceAll(']', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'));
      var count = 0;
      setNewContent(content.replaceAll(/(?:\[footnote)(.*?)(?:\[\/footnote\])/g, function(){count+=1;return '<sup id="sup" onclick="location.href=`#footnotes`" >' + count + '</sup>'}))
    } else {
      setNewContent(content)
    }
  }, [])


  const [linkedColandCur, setLinkedColandCur] = useState(null);
  const [uniquelinkedColandCur, setUniquelinkedColandCur] = useState(null);

  useEffect(() => {
    setLinkedColandCur(linkedCollection?.linkedCollection?.linkedItems?.linkedItems.concat(linkedCuratedBy?.linkedCuratedBy ? linkedCuratedBy?.linkedCuratedBy?.linkedItems?.linkedItems : linkedCollection?.linkedCollection?.linkedItems?.linkedItems))
  }, [])

  useEffect(() => {
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
          <div className='main-wrapper'>
              <div className='left-sidebar'>
                <Filter authors={router.query.authors} tag={router.query.tag} tags={tags} categories={categories} title={router.query.title} category={router.query.category} year={router.query.year} path={router.asPath.replace(/^.+\?/,'/filter?')}/>
              </div>
              <div className='content-wrapper'>
                {intro.bigImage && 
                  <div className='big-image'>
                    <img src={intro.bigImage.sourceUrl}/>
                    {intro.bigImage.caption &&<div className='captions'>{intro.bigImage.caption}</div>}
                  </div>
                }
                {intro.embed && <iframe className='big-image' src={intro.embed}/>}
                <div className='intro' dangerouslySetInnerHTML={{ __html: intro.intro ?? '' }} />
                <div className='content' dangerouslySetInnerHTML={{ __html: newContent ?? '' }} />
                {bibliography.bibliography && 
                  <Collapsible trigger="Bibliography" idname={'bibliography'}>
                    <p dangerouslySetInnerHTML={{ __html: bibliography.bibliography}}></p>
                  </Collapsible>
                }
                {accordion.accordion?.map((item, i) => {
                  return(
                    <Collapsible trigger={item.title} idname={item.title.replaceAll(' ', '-')}>
                      <div className='content' dangerouslySetInnerHTML={{ __html: item.text ?? '' }} />
                      {item.person?.map((item, i) => {
                        return(
                          <div className='person'>
                            {item.image?.mediaItemUrl && <img src={item.image?.mediaItemUrl}/>}
                            <div>
                              <h2>{item.name}</h2>
                              <div className='content' dangerouslySetInnerHTML={{ __html: item.text ?? '' }} />
                            </div>
                          </div>
                        )
                      })}
                      
                    </Collapsible>
                  )
                })}
                {authors.length > 0 && 
                  <Collapsible trigger="Authors" idname={'authors'}>
                    <div className='authors-bio'>
                      {authors.map((item, i) => {
                        return(
                          <div className='author-bio'>
                            <h3 dangerouslySetInnerHTML={{ __html: item.name}} ></h3>
                            <p dangerouslySetInnerHTML={{ __html: item.acf.bio}}/>
                          </div>
                        )
                      })}
                    </div>
                  </Collapsible>
                }
                {footnotes && 
                  <Collapsible trigger="Footnotes" idname={'footnotes'}>
                    <ul className='footnotes'>
                      {footnotes.map((item, i) => {
                        return(
                          <li dangerouslySetInnerHTML={{ __html: item.replaceAll(/(?:\[footnote)(.*?)(?=\])/gm, '').replace(']', '').replaceAll('about:blank', '#') ?? '' }}/>
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
      bibliography{
        bibliography
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
          caption
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
      accordion {
        accordion {
          title
          text
          person{
            name
            text
            image {
              mediaItemUrl
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
