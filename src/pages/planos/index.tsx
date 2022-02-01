import Layout from '@/src/components/Layout';
import React from 'react';
import Plane from '../../components/Plane';
import styles from '../../styles/Planos.module.scss';

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
function Planos() {
  const { t } = useTranslation('planos');
  return (
    <>
      <Layout pageTitle="Planos">
        <Plane />
        <section className={styles.SectionContainer}>
          <section></section>
          <section></section>
          <div className={styles.faqbox} id="faq">
            <div className={styles.faqcontainer} id="faqcontainer">
              <section className={styles.faqheadline}>
                <h3 className={styles.subtitle}>{t('subtitle')}</h3>
                <p>
                  <strong>Dificulade com um dos serviços?</strong>
                  Entre em contato com nosso time
                  <button>Abrir chat</button>
                </p>
              </section>
              <div className={styles.faqItem}>
                <button
                  type="button"
                  aria-expanded="true"
                  aria-controls="id-57"
                  className={styles.faqItembutton}
                >
                  <div className={styles.faqItemnumberItem}>
                    <span>1</span>
                    <strong>O que é o Maro?</strong>
                  </div>
                  <div className={styles.faqItemicon}>+</div>
                </button>
                <div className={styles.faqItemcontent}>
                  O Discover é um programa de formação de devs, feito para você
                  aprender do zero programação com foco em desenvolvimento web.
                  O principal objetivo do programa é te ajudar a conquistar sua
                  primeira oportunidade profissional nessa área. Na plataforma
                  você terá acesso a mais de 500 aulas — e crescendo — para você
                  ir desde a sua primeira linha de código a preparação para
                  desafios maiores.
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export const getServerSideProps: CustomGetServerSideProps = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      'planos',
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
  'planos',
  'menu',
  'footer',
  'common',
  'popups',
  '404',
  '500',
])(Planos);
