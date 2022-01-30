import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import styles from '../styles/404.module.scss';
//src/pages/404.tsx
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
export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
