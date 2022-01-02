import '../styles/globals.scss';
import type { AppProps } from 'next/app';
//import Header from '../components/Header';
import { NextIntlProvider } from 'next-intl';
//import Footer from '../components/Footer';
import Router from 'next/router';
import { useState } from 'react';
import Loader from '../components/Loader';

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  Router.events.on('routeChangeStart', (url) => {
    console.log('testenado o loading...');
    setLoading(true);
  });

  Router.events.on('routeChangeComplete', (url) => {
    console.log('testenado o loading completo...');
    setLoading(false);
  });
  return (
    <>
      <NextIntlProvider messages={pageProps.messages}>
        {loading && <Loader />}
        <Component {...pageProps} />
      </NextIntlProvider>
    </>
  );
}

export default MyApp;
