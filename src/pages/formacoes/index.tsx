import Layout from '@/src/components/Layout';
import React from 'react';

import styles from '../../styles/Formacoes.module.scss';
export default function Planos() {
  return (
    <>
      <Layout pageTitle="Formações">
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
                src="/img/fundo.gif"
                alt="Fundo"
              />
            </div>
            <div className={styles.conteinerTop}>
              <section className={styles.CallToActionSection}>
                <div className={styles.TitleConteriner}>
                  <h1 className={styles.textStyles}>
                    Formações e cursos de tecnologia
                    <ul className={styles.dynamicText}>
                      <li>
                        <span
                          style={{
                            color: '#00bd55',
                            textShadow: '#003d1c 2px  6px 3px',
                          }}
                        >
                          Programação
                        </span>
                      </li>
                      <li>
                        <span
                          style={{
                            color: '#00f0e2',
                            textShadow: '#008fa8 2px 6px 3px',
                          }}
                        >
                          Front-end
                        </span>
                      </li>
                      <li>
                        <span
                          style={{
                            color: '#b23cfd',
                            textShadow: '#6900aa 2px 6px 3px',
                          }}
                        >
                          DATA SCIENCE
                        </span>
                      </li>
                      <li>
                        <span
                          style={{
                            color: '#ec0000',
                            textShadow: '#970000 2px 5px 6px 3px',
                          }}
                        >
                          DATA SCIENCE
                        </span>
                      </li>
                    </ul>
                  </h1>
                </div>
                <div className={styles.Hidden}>
                  <img src="/img/capainit.svg" alt="Treinamento" />
                </div>
              </section>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
