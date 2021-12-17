import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>MAREO</title>
      </Head>
      <main className={styles.pageConteiner}>
        <section className={styles.Conteiner}>
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
            </div>
            <div className={styles.Hidden}>
              <img src="/img/capainit.svg" alt="Treinamento" />
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default Home;
