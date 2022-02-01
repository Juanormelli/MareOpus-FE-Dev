/* eslint-disable @next/next/no-img-element */
import styles from '../../styles/Sobre.module.scss';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { AiOutlineArrowDown } from 'react-icons/ai';
import Layout from '@/src/components/Layout';

import { useTranslation, withTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
function Sobre() {
  const { t } = useTranslation('sobre');
  return (
    <>
      <Layout pageTitle="Sobre">
        <div className={styles.pageConteiner}>
          <section className={styles.Conteiner}>
            <section className={styles.CallToActionSection}>
              <div className={styles.Hidden}>
                <img src="/img/about.svg" alt="About" />
              </div>
              <div className={styles.TitleConteriner}>
                <div className={styles.Missao}>
                  <div className={styles.IconTeacher}>
                    <FaChalkboardTeacher size={35} />
                  </div>
                  <h3>
                    {t('title')}
                    <br /> <b>Programmers training</b>
                  </h3>
                </div>
                <h1 className={styles.textStyles}>
                  {t('texte')}
                  <br /> <span>{t('textedesct')}</span>
                </h1>
                <p>{t('description')}</p>
                <a className={styles.button}>
                  {t('know')}
                  <div className={styles.ArrowDown}>
                    <AiOutlineArrowDown size={23} />
                  </div>
                </a>
              </div>
            </section>
          </section>
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      'sobre',
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
  'sobre',
  'menu',
  'footer',
  'common',
  'popups',
  '404',
  '500',
])(Sobre);
