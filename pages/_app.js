import '../faust.config';
import React from 'react';
import { useRouter } from 'next/router';
import { FaustProvider } from '@faustwp/core';
import '@faustwp/core/dist/css/toolbar.css';
import '../styles/main.scss';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <FaustProvider pageProps={pageProps}>
      <header>
          <script src="planck.min.js"></script>
          <script src="d3.min.js"></script>
          <script src="balancetext.min.js"></script>
          <link rel="stylesheet" href="https://use.typekit.net/iiw5mea.css"></link>
      </header>
      <Component {...pageProps} key={router.asPath} />
      <script src="java.js"></script>
    </FaustProvider>
  );
}
