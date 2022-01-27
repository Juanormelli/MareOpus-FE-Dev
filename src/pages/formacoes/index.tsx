import Layout from '@/src/components/Layout';
import Link from 'next/link';
import React from 'react';
import { AiOutlineCode } from 'react-icons/ai';
import { FaLaptopCode, FaReact } from 'react-icons/fa';
import { GiBrain, GiCrystalBall, GiMaterialsScience } from 'react-icons/gi';
import { IoInfiniteSharp } from 'react-icons/io5';
import { SiAzuredevops } from 'react-icons/si';

import styles from '../../styles/Formacoes.module.scss';
export default function Planos() {
  return (
    <>
      <Layout pageTitle="Formações">
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
                            textShadow: '#a30101 2px 6px 3px',
                          }}
                        >
                          DEVOPS
                        </span>
                      </li>
                      <li>
                        <span
                          style={{
                            color: '#f7ad19',
                            textShadow: '#d19215 2px 6px 3px',
                          }}
                        >
                          Inovação & Gestão
                        </span>
                      </li>
                      <li>
                        <span
                          style={{
                            color: '#1616ff',
                            textShadow: '#1266f1 2px 6px 3px',
                          }}
                        >
                          UX & DESIGN
                        </span>
                      </li>
                    </ul>
                  </h1>
                  <nav className={styles.categorias_home}>
                    <div className={styles.categorias_elementos}>
                      <div className={styles.categorias_wrapper_links}>
                        <a className={styles.categorias_link} href="">
                          <div
                            className={styles.categorias_img}
                            style={{
                              background: '#02c52252',
                            }}
                          >
                            <FaLaptopCode size={40} color="#00bd55" />
                          </div>
                          <div
                            className={styles.categorias_texts}
                            style={{
                              color: '#00bd55',
                            }}
                          >
                            <span>Trilha</span>
                            <h4>PROGRAMAÇÃO</h4>
                          </div>
                        </a>
                        <nav className={styles.categorias_home}>
                          <Link href="/planos">Logica,</Link>
                        </nav>
                      </div>
                      <div className={styles.categorias_wrapper_links}>
                        <a className={styles.categorias_link} href="">
                          <div
                            className={styles.categorias_img}
                            style={{
                              background: '#00f0e252',
                            }}
                          >
                            <FaReact size={40} color="#00f0e2" />
                          </div>
                          <div
                            className={styles.categorias_texts}
                            style={{
                              color: '#00f0e2',
                            }}
                          >
                            <span>Trilha</span>
                            <h4>FRONT-END</h4>
                          </div>
                        </a>
                        <nav className={styles.categorias_home}>
                          <Link href="/planos">HTML & CSS, </Link>
                          <Link href="/planos">JavaScript, </Link>
                          <Link href="/planos">ReactJS, </Link>
                        </nav>
                      </div>
                      <div className={styles.categorias_wrapper_links}>
                        <a className={styles.categorias_link} href="">
                          <div
                            className={styles.categorias_img}
                            style={{
                              background: '#b23cfd52',
                            }}
                          >
                            <GiMaterialsScience size={40} color="#b23cfd" />
                          </div>
                          <div
                            className={styles.categorias_texts}
                            style={{
                              color: '#b23cfd',
                            }}
                          >
                            <span>Trilha</span>
                            <h4>DATA SCIENCE</h4>
                          </div>
                        </a>
                        <nav className={styles.categorias_home}>
                          <Link href="/planos">Ciência de Dados, </Link>
                          <Link href="/planos">Banco de dados, </Link>
                          <Link href="/planos">Engenharia de Dados, </Link>
                          <Link href="/planos">SAS, </Link>
                          <Link href="/planos">NoSQL </Link>
                        </nav>
                      </div>
                      <div className={styles.categorias_wrapper_links}>
                        <a className={styles.categorias_link} href="">
                          <div
                            className={styles.categorias_img}
                            style={{
                              background: '#ec000052',
                            }}
                          >
                            <IoInfiniteSharp size={40} color="#ec0000" />
                          </div>
                          <div
                            className={styles.categorias_texts}
                            style={{
                              color: '#ec0000',
                            }}
                          >
                            <span>Trilha</span>
                            <h4>DEVOPS</h4>
                          </div>
                        </a>
                        <nav className={styles.categorias_home}>
                          <Link href="/planos">Controle de versão, </Link>
                          <Link href="/planos">Cloud, </Link>
                          <Link href="/planos">Containes, </Link>
                          <Link href="/planos">Linux, </Link>
                          <Link href="/planos">Windows, </Link>
                          <Link href="/planos">Segurança </Link>
                        </nav>
                      </div>
                      <div className={styles.categorias_wrapper_links}>
                        <a className={styles.categorias_link} href="">
                          <div
                            className={styles.categorias_img}
                            style={{
                              background: '#f7ad1952',
                            }}
                          >
                            <GiBrain size={40} color="#f7ad19" />
                          </div>
                          <div
                            className={styles.categorias_texts}
                            style={{
                              color: '#f7ad19',
                            }}
                          >
                            <span>Trilha</span>
                            <h4>INOVAÇÃO & GESTÃO</h4>
                          </div>
                        </a>
                        <nav className={styles.categorias_home}>
                          <Link href="/planos">Métodos Ágeis,</Link>
                        </nav>
                      </div>
                      <div className={styles.categorias_wrapper_links}>
                        <a className={styles.categorias_link} href="">
                          <div
                            className={styles.categorias_img}
                            style={{
                              background: '#1266f152',
                            }}
                          >
                            <GiCrystalBall size={40} color="#1266f1" />
                          </div>
                          <div
                            className={styles.categorias_texts}
                            style={{
                              color: '#1266f1',
                            }}
                          >
                            <span>Trilha</span>
                            <h4>UX & DESIGN</h4>
                          </div>
                        </a>
                        <nav className={styles.categorias_home}>
                          <Link href="/planos">Design Gráfico, </Link>
                          <Link href="/planos">3D ,</Link>
                          <Link href="/planos">Design de Ilustração, </Link>
                          <Link href="/planos">Produção</Link>
                        </nav>
                      </div>
                    </div>
                  </nav>
                </div>
                <div className={styles.Hidden}>
                  <img src="/img/capainit.svg" alt="Treinamento" />
                </div>
              </section>
            </div>
          </section>
          <section className={styles.Conteiner}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos voluptatum consequatur ut ullam eum, ab obcaecati
              quaerat fuga repellat ipsum aliquam magnam repellendus dicta optio
              exercitationem, est porro cupiditate dolor.
            </p>
          </section>
        </div>
      </Layout>
    </>
  );
}
