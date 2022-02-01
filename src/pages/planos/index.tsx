import Layout from '@/src/components/Layout';
import { useTranslation } from 'next-i18next';
import React from 'react';
import Plane from '../../components/Plane';
import styles from '../../styles/Planos.module.scss';
export default function Planos() {
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
                <h3 className={styles.subtitle}>
                  Pregunats e respostas mais frequentes
                </h3>
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
