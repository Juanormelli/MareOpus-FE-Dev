import React from 'react';
import Head from 'next/head';
import styles from './styles.module.scss';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

interface LayoutProps {
  pageTitle?: string;
  description?: string;
  type?: 'article' | 'website';
}

const Layout: React.FC<LayoutProps> = ({
  pageTitle,
  description = 'Treinamento de computação',
  type = 'website',
  children,
}) => {
  const router = useRouter();
  const { t } = useTranslation('common');

  const locale = router.locale === 'es' ? '/es' : '';
  const canonical = `http://localhost:3000/${locale}${router.asPath}`;
  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content={type} />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />

        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="@guilherme" key="twhandle" />
        <link rel="canonical" href={canonical} />
        <title>Mareo | {pageTitle}</title>
        <link
          rel="alternate"
          hrefLang="en"
          href={`http://localhost:3000/en${router.asPath}`}
        />
        <link
          rel="alternate"
          hrefLang="es"
          href={`http://localhost:3000/es${router.asPath}`}
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="http://localhost:3000"
        />
      </Head>
      <div className={styles.pageConteiner}>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
