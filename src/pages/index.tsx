/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Layout from '../components/Layout';
import Planos from '../components/Plane';
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.scss';

import { useTranslation, withTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ParsedUrlQuery } from 'querystring';
import { GetServerSidePropsResult, PreviewData } from 'next';
import { IncomingMessage, ServerResponse } from 'http';
import { NextApiRequestCookies } from 'next/dist/server/api-utils';

type CustomGetServerSideProps<
  P extends { [key: string]: any } = { [key: string]: any },
  Q extends ParsedUrlQuery = ParsedUrlQuery
> = (
  context: GetServerSidePropsContext<Q>
) => Promise<GetServerSidePropsResult<P>>;

type GetServerSidePropsContext<Q extends ParsedUrlQuery = ParsedUrlQuery> = {
  req: IncomingMessage & {
    cookies: NextApiRequestCookies;
  };
  res: ServerResponse;
  params?: Q;
  query: ParsedUrlQuery;
  preview?: boolean;
  previewData?: PreviewData;
  resolvedUrl: string;
  locale: string; // This is where the magic happens.
  locales?: string[];
  defaultLocale?: string;
};
function Home() {
  const { t } = useTranslation('home');
  const description = t('description');
  const config = {
    type: 'spring',
    damping: 20,
    stiffness: 100,
  };

  return (
    <>
      <Layout pageTitle="Home">
        <div className={styles.pageConteiner}>
          <section className={styles.Conteiner}>
            <div
              style={{
                display: 'block',
                overflow: 'hidden',
                position: 'absolute',
                top: '0',
                left: '0',
                bottom: '0',
                right: '0',
                boxSizing: 'border-box',
                margin: '0',
                zIndex: '-5',
                filter: 'blur(3px) contrast(110%)',
              }}
            >
              <img
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  bottom: '0',
                  right: '0',
                  boxSizing: 'border-box',
                  padding: '0',
                  border: 'none',
                  margin: 'auto',
                  display: 'block',
                  width: '0',
                  height: '0',
                  minWidth: '100%',
                  maxWidth: '100%',
                  minHeight: '100%',
                  maxHeight: '100%',
                  objectFit: 'cover',
                  objectPosition: 'bottom',
                }}
                src="/img/fundo.jpg"
                alt="Fundo"
              />
            </div>
            <div className={styles.conteinerTop}>
              <section className={styles.CallToActionSection}>
                <div className={styles.TitleConteriner}>
                  <motion.h1
                    transition={config}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ x: 0, opacity: 0 }}
                    className={styles.textStyles}
                  >
                    <ul className={styles.dynamicText}>
                      <li>
                        <span>{t('create')}</span>
                      </li>
                      <li>
                        <span>{t('develop')}</span>
                      </li>
                      <li>
                        <span>{t('program')}</span>
                      </li>
                    </ul>
                    {t('title')}
                  </motion.h1>
                  <p>{description}</p>
                  <div className={styles.conetButton}>
                    <Link
                      href={{
                        pathname: '/planos',
                        query: { name: 'test' },
                      }}
                    >
                      <a className={styles.button}>
                        {t('goPlans')}
                        <div className={styles.ArrowRight}>
                          <AiOutlineArrowRight color="#FFFFFF" />
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </section>
              {/** entenção video */}
              <img
                className={styles.contVideo}
                src="/img/equipe.gif"
                alt="Equipe"
              />
            </div>
          </section>

          <section className={styles.Conteiner}>
            <section className={styles.Content}>
              <div className={styles.Title}>
                <h1>teste</h1>
              </div>
            </section>
          </section>
          <Planos />
        </div>
      </Layout>
    </>
  );
}
export const getServerSideProps: CustomGetServerSideProps = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      'home',
      'menu',
      'footer',
      'common',
      'popups',
      '404',
      '500',
    ])),
  },
});

export default withTranslation([
  'home',
  'menu',
  'footer',
  'common',
  'popups',
  '404',
  '500',
])(Home);
