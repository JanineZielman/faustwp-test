import { gql } from '@apollo/client';
import * as MENUS from '../constants/menus';
import { BlogInfoFragment } from '../fragments/GeneralSettings';
import {
  Header,
  Footer,
  FeaturedImage,
  SEO,
  LinkedItems
} from '../components';

export default function Component(props) {
  // Loading state for previews
  if (props.loading) {
    return <>Loading...</>;
  }

  const { title: siteTitle, description: siteDescription } =
    props?.data?.generalSettings;
  const { title, content, featuredImage, intro, sidebar, person} = props?.data?.page ?? { title: '' };
  const primaryMenu = props.data?.menu?.menuItems?.nodes ?? [];

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
        <main className="article page">
          <div className="wrap">
            <h1 className='headline'>{title}</h1>
            <div className='intro' dangerouslySetInnerHTML={{ __html: intro.intro ?? '' }} />
            {intro.embed && <iframe className='big-image' src={intro.embed}/>}
            {props.data.posts &&
               <LinkedItems props={props.data.posts.nodes}/>
            }
            <div className='main-wrapper'>
              <div className='left-sidebar'>
              
              </div>
              <div className='content-wrapper'>
                <div className='content' dangerouslySetInnerHTML={{ __html: content ?? '' }} />
                {person.person &&
                  <div className='persons'>
                    {person.person.map((item, i) => {
                      return(
                        <div className='person'>
                          <img src={item.image.mediaItemUrl}/>
                          <div>
                            <h2>{item.name}</h2>
                            <p>{item.text}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                }
              </div>
              <div className='right-sidebar'>
                <div dangerouslySetInnerHTML={{ __html: sidebar.sidebarText ?? '' }} />
              </div>
            </div>
          </div>
        </main>
      {/* <Footer title={siteTitle} menuItems={footerMenu} /> */}
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
    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
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
      person {
        person {
          name
          text
          image {
            mediaItemUrl
          }
        }
      }
    }
    generalSettings {
      ...BlogInfoFragment
    }
  }
`;
