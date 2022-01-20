import type { GetStaticPropsContext, NextPage } from 'next';
//import { useTranslations } from 'next-intl';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Layout from '../components/Layout';
import Planos from '../components/Plane';
import { motion } from 'framer-motion';
//import { ActiveLink } from '../components/ActiveLink';
import styles from '../styles/Home.module.scss';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// pages/index.js
//export const getStaticProps = async ({ locale }: { locale: string }) => ({
//props: {
//  ...(await serverSideTranslations(locale, ['common'])),
//},
//});

const Home: NextPage = () => {
  //const t = useTranslations('home');
  const config = {
    type: 'spring',
    damping: 20,
    stiffness: 100,
  };

  return (
    <>
      <Layout pageTitle="Home">
        <div className={styles.pageConteiner}>
          <section className={styles.Conteiner} id="hero">
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
                  </motion.h1>
                  <p>
                    Aqui e seu ponto inicial do crescimento profissional que
                    você tanto esperava. Dominando as principais tecnologias
                    utilizadas no mercado, evoluindo a cada passo.
                  </p>
                  <div className={styles.conetButton}>
                    <Link
                      href={{
                        pathname: '/planos',
                        query: { name: 'test' },
                      }}
                    >
                      <a className={styles.button}>
                        VENHA FAZER PARTE
                        <div className={styles.ArrowRight}>
                          <AiOutlineArrowRight color="#FFFFFF" />
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </section>
              {/** entenção video */}
              <img className={styles.contVideo} src="/img/equipe.gif" />
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
