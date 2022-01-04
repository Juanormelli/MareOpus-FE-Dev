import type { GetStaticPropsContext, NextPage } from 'next';
//import { useTranslations } from 'next-intl';
import Head from 'next/head';
import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
//import { ActiveLink } from '../components/ActiveLink';
import styles from '../styles/Home.module.scss';

// pages/index.js
//export async function getStaticProps({ locale }: GetStaticPropsContext) {
//  return {
//    props: {
// You can get the messages from anywhere you like, but the recommended
// pattern is to put them in JSON files separated by language and read
// the desired one based on the `locale` received from Next.js.
//messages: await import(`../../public/static/locales/${locale}.json`),
//    },
//  };
//}

const Home: NextPage = () => {
  //const t = useTranslations('home');
  return (
    <>
      <Head>
        <title>MAREO</title>
      </Head>
      <main className={styles.pageConteiner}>
        <section className={styles.Conteiner} id="hero">
          <section className={styles.CallToActionSection}>
            <div className={styles.TitleConteriner}>
              <h1 className={styles.textStyles}>
                <ul className={styles.dynamicText}>
                  <li>
                    <span>Crie</span>
                  </li>
                  <li>
                    <span>Desenvolva</span>
                  </li>
                  <li>
                    <span>Programe</span>
                  </li>
                </ul>
                a formula do seu futuro agora!
              </h1>
              <p>
                Aqui e seu ponto incial do crecimento profissonal que tanto
                domindo as principais tecinologias utilizadas no mercado,
                evoluindo a cada passo.
              </p>
              <a className={styles.button}>
                VENHA FAZER PARTE
                <div className={styles.ArrowRight}>
                  <AiOutlineArrowRight color="#FFFFFF" />
                </div>
              </a>
            </div>
            <div className={styles.Hidden}>
              <img src="/img/capainit.svg" alt="Treinamento" />
            </div>
          </section>
        </section>

        <section className={styles.Conteiner}>
          <section className={styles.Content}>
            <div className={styles.Title}>
              <h1>teste</h1>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export async function getServerSideProps() {
  await new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });
  return {
    props: {},
  };
}
export default Home;
