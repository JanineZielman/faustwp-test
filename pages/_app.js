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
          <meta name="google-site-verification" content="TFQLQJADtvgwc49Btb11JFm5mEvNaZNjdFIHXgj6ESw" />
          <script
            id="mcjs"
            dangerouslySetInnerHTML={{
              __html: `
                !function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/900faf96fb1c9ed5b73a7586b/9a19aa1ac2a8d1232e4ed20ce.js");
              `,
            }}
          />
      </head>
      <Component {...pageProps} key={router.asPath} />
      <script src="/java.js"></script>
    </FaustProvider>
  );
}
