import { gql } from '@apollo/client';
import * as MENUS from '../constants/menus';
import { BlogInfoFragment } from '../fragments/GeneralSettings';
import {
  Header,
  Footer,
  Main,
  Container,
  EntryHeader,
  NavigationMenu,
  ContentWrapper,
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
  const { title, content, featuredImage, date, author } = props.data.post;

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
        // menuItems={primaryMenu}
      />
      <main className="article">
        <div className='info-bar'>
          <div className='date'>
            <div className='field'>DATE</div>
            <div className='data'>{date}</div>
          </div>
          <div className='date'>
            <div className='field'>Published in</div>
            <div className='data'>{date}</div>
          </div>
          <div className='date'>
            <div className='field'>DOI</div>
            <div className='data'>{date}</div>
          </div>
        </div>
        <h1 className='headline'>{title}</h1>
        {/* <img src={post.featuredImage?.node.mediaItemUrl}/> */}
        <div className="wrap">
          <div dangerouslySetInnerHTML={{ __html: content ?? '' }} />
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
    post(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      content
      date
      author {
        node {
          name
        }
      }
      ...FeaturedImageFragment
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
