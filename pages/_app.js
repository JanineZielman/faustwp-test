import '../faust.config';
import React from 'react';
import { useRouter } from 'next/router';
import { FaustProvider } from '@faustwp/core';
import '@faustwp/core/dist/css/toolbar.css';
import '../styles/main.scss';
import '../styles/breakpoints.scss';
import Script from 'next/script';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <FaustProvider pageProps={pageProps}>
      <head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000"/>
          <meta name="msapplication-TileColor" content="#fde4ea"/>
          <meta name="theme-color" content="#ffffff"/>
          <script src="/planck.min.js"></script>
          <script src="/d3.min.js"></script>
          <script src="/balancetext.min.js"></script>
          {/* <link rel="stylesheet" href="https://use.typekit.net/iiw5mea.css"></link> */}
          <link rel="stylesheet" href="https://use.typekit.net/lyh0tna.css"></link>
          <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js" integrity="sha512-3gJwYpMe3QewGELv8k/BX9vcqhryRdzRMxVfq6ngyWXwo03GFEzjsUm8Q7RZcHPHksttq7/GFoxjCVUjkjvPdw==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
          <Script src="/script.js"/>
      </head>
      <Component {...pageProps} key={router.asPath} />
      <script src="/java.js"></script>
    </FaustProvider>
  );
}
