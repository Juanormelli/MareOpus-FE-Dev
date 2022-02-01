import Link from 'next/link';
import styles from '../styles/404.module.scss';

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
export default function Custom404() {
  const { t } = useTranslation('404');
  return (
    <>
      <div className={styles.content404}>
        <div className={styles.Conteiner}>
          <h1>
            <b>{t('oops')}... </b>
            <br /> {t('subtitle')}
          </h1>
          <section className={styles.errorContainer}>
            <span className={styles.four}>
              <span className={styles.screenReaderText}>4</span>
            </span>
            <span className={styles.zero}>
              <span className={styles.screenReaderText}>0</span>
            </span>
            <span className={styles.four}>
              <span className={styles.screenReaderText}>4</span>
            </span>
          </section>
          <p className={styles.zoomArea}>
            <b>{t('error')} </b> {t('message')}
          </p>
          <div className={styles.linkContainer}>
            <Link href="/">
              <a className={styles.moreLink}>{t('goHome')}</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export const getServerSideProps: CustomGetServerSideProps = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale, ['404'])),
  },
});
