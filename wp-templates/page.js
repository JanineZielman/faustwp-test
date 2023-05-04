import { gql } from '@apollo/client';
import * as MENUS from '../constants/menus';
import { BlogInfoFragment } from '../fragments/GeneralSettings';
import {
  Header,
  Footer,
  Main,
  Container,
  ContentWrapper,
  EntryHeader,
  NavigationMenu,
  FeaturedImage,
  SEO,
} from '../components';

export default function Component(props) {
  // Loading state for previews
  if (props.loading) {
    return <>Loading...</>;
  }

  const { title: siteTitle, description: siteDescription } =
    props?.data?.generalSettings;
  const { title, content, featuredImage, intro, sidebar } = props?.data?.page ?? { title: '' };
  const primaryMenu = props.data?.menu?.menuItems?.nodes ?? [];

  console.log(sidebar)

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
        <div className='left-sidebar'></div>
        <div className="wrap">
          <h1 className='title main-title'>{title}</h1>
          <p className='intro'>{intro.intro}</p>
          {intro.embed && <iframe className='big-image' src={intro.embed}/>}
          <div dangerouslySetInnerHTML={{ __html: content ?? '' }} />
        </div>
        <div className='right-sidebar'>
          <div dangerouslySetInnerHTML={{ __html: sidebar.sidebarText ?? '' }} />
        </div>
       </main>
      {/* <Footer title={siteTitle} menuItems={footerMenu} /> */}
    </>
  );
}

Component.variables = ({ databaseId }, ctx) => {
  return {
    databaseId,
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
    }
    generalSettings {
      ...BlogInfoFragment
    }
  }
`;
