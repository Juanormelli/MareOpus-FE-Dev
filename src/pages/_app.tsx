import '../styles/globals.scss';
import type { AppProps } from 'next/app';
//import Header from '../components/Header';
import { NextIntlProvider } from 'next-intl';
//import Footer from '../components/Footer';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import RegisterModal from '../components/RegisterModal';
import Search from '../components/Search';

import VLibras from '@djpfs/react-vlibras';
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }: AppProps) {
  const [session, setsession] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isNewOpenSearch, setIsNewOpenSearch] = useState(false);
  const [isNewLoginModalOpen, setIsNewLoginModalOpen] = useState(false);
  const [isNewRegisterModalOpen, setIsNewRegisterModalOpen] = useState(false);

  function handleOpenNewLoginModal() {
    setIsNewLoginModalOpen(true);
  }

  function handleCloseNewLoginModal() {
    setIsNewLoginModalOpen(false);
  }

  function handleOpenNewRegisterModal() {
    setIsNewRegisterModalOpen(true);
  }

  function handleCloseNewRegisterModal() {
    setIsNewRegisterModalOpen(false);
  }

  function handleCloseNewOpenSearch() {
    setIsNewOpenSearch(false);
  }

  function handleOpenNewOpenSearch() {
    setIsNewOpenSearch(true);
  }

  useEffect(() => {
    console.log(session);
  }, [session]);

  Router.events.on('routeChangeStart', (url) => {
    console.log('testenado o loading...', url);
    setLoading(true);
  });

  Router.events.on('routeChangeComplete', (url) => {
    console.log('testenado o loading completo...');
    setLoading(false);
  });

  function onOpenSession() {
    setsession(true);
  }

  if (session) {
    return (
      <>
        <NextIntlProvider messages={pageProps.messages}>
          {loading && <Loader />}
          <Component {...pageProps} />
          <Footer />
        </NextIntlProvider>
      </>
    );
  } else {
    return (
      <>
        <NextIntlProvider messages={pageProps.messages}>
          {loading && <Loader />}
          <Header
            onOpenSession={onOpenSession}
            onOpenSearch={handleOpenNewOpenSearch}
            onOpenLoginModal={handleOpenNewLoginModal}
            onOpenRegisterModal={handleOpenNewRegisterModal}
          ></Header>
          <Component {...pageProps} />
          <Modal
            isOpen={isNewLoginModalOpen}
            onRequestClose={handleCloseNewLoginModal}
            onOpenRegisterModal={handleOpenNewRegisterModal}
          />
          <RegisterModal
            isOpen={isNewRegisterModalOpen}
            onRequestClose={handleCloseNewRegisterModal}
          />
          <Search
            isOpen={isNewOpenSearch}
            onRequestClose={handleCloseNewOpenSearch}
          />
          <Footer />
        </NextIntlProvider>
        <VLibras />
      </>
    );
  }
}

export default appWithTranslation(MyApp);
