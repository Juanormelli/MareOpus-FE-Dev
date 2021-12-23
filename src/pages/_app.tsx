import '../styles/globals.scss';
import type { AppProps } from 'next/app';
//import Header from '../components/Header';
import { NextIntlProvider } from 'next-intl';
//import Footer from '../components/Footer';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextIntlProvider messages={pageProps.messages}>
        <Component {...pageProps} />
      </NextIntlProvider>
    </>
  );
}

export default MyApp;
