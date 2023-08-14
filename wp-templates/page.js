import { gql } from '@apollo/client';
import * as MENUS from '../constants/menus';
import { BlogInfoFragment } from '../fragments/GeneralSettings';
import {
  Header,
  Footer,
  FeaturedImage,
  SEO,
  LinkedItems,
  Collapsible
} from '../components';


export default function Component(props) {
  // Loading state for previews
  if (props.loading) {
    return <>Loading...</>;
  }

  const { title: siteTitle, description: siteDescription } =
    props?.data?.generalSettings;
  const { title, content, featuredImage, intro, sidebar, leftSidebar, accordion} = props?.data?.page ?? { title: '' };
  const primaryMenu = props.data?.menu?.menuItems?.nodes ?? [];
  const footerMenu = props.data?.footer?.footer?.column ?? [];

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
        <main className="article page">
          <div className="wrap">
            <h1 className='headline'>{title}</h1>
            <div className='intro' dangerouslySetInnerHTML={{ __html: intro.intro ?? '' }} />
            {intro.embed && <iframe className='big-image' src={intro.embed}/>}


            <div className='main-wrapper'>
              <div className='left-sidebar'>
                {leftSidebar?.relatedItems?.map((item, i) => {
                  return(
                    <div className='related-item'>
                      <a href={item.link} target="_blank">
                        <h1>{item.date}</h1>
                        <h2>{item.title}</h2>
                        <p>{item.organiser}</p>
                      </a>
                    </div>
                  )
                })}
              </div>
              <div className='content-wrapper'>
                <div className='content' dangerouslySetInnerHTML={{ __html: content ?? '' }} />
                <div className='persons'>
                  {accordion.accordion?.map((item, i) => {
                    return(
                      <Collapsible trigger={item.title} idname={item.title.replaceAll(' ', '-')}>
                        <div className='content' dangerouslySetInnerHTML={{ __html: item.text ?? '' }} />
                        {item.person?.map((item, i) => {
                          return(
                            <div className='person'>
                              <img src={item.image.mediaItemUrl}/>
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
                </div>
              </div>
              <div className='right-sidebar'>
                <div dangerouslySetInnerHTML={{ __html: sidebar.sidebarText ?? '' }} />
              </div>
            </div>
            <br/>
            {props.data.posts?.nodes?.length > 0 &&
               <LinkedItems props={props.data.posts.nodes}/>
            }
          </div>
        </main>
      <Footer title={siteTitle} menuItems={footerMenu} />
    </>
  );
}

Component.variables = ({ databaseId, slug }, ctx) => {
  return {
    databaseId,
    slug,
    headerLocation: MENUS.PRIMARY_LOCATION,
    footerLocation: MENUS.FOOTER_LOCATION,
    asPreview: ctx?.asPreview,
  };
};

Component.query = gql`
  ${BlogInfoFragment}
  ${FeaturedImage.fragments.entry}
  query GetPageData(
    $databaseId: ID!
    $slug:  String!
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
    posts(where: {categoryName: $slug, tag: "collection"}) {
      nodes {
        id
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
          }
        }
        tags{
          nodes{
            name
          }
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
    page: page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      content
      ...FeaturedImageFragment
      intro {
        intro
        embed
        bigImage {
          sourceUrl
        }
      }
      sidebar{
        sidebarText
      }
      leftSidebar {
        relatedItems {
          title
          organiser
          link
          endDate
          date
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
    }
    generalSettings {
      ...BlogInfoFragment
    }
  }
`;
