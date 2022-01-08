import React from 'react';
import styles from './styles.module.scss';
import { GiAngelWings, GiSpikedSnail, GiThreeLeaves } from 'react-icons/gi';
export default function Planos() {
  return (
    <>
      <div className={styles.plano}>
        <div className={styles.TitleConteriner}>
          <h1 className={styles.textStyles}>
            Aceleramos a sua <br /> <span>carreira através da educação</span>
          </h1>
          <p>
            Não importa se você já programa há anos ou está começando do zero. A
            Rocketseat é para todas e todos os devs, em todos os momentos de
            carreira.
          </p>
        </div>
        <div className={styles.cards}>
          <section className={styles.card}>
            <header>
              <div className={styles.Top}>
                <div className={styles.icon}>
                  <GiThreeLeaves size={50} color="#00bd55" />
                </div>
                <h3>Noob</h3>
              </div>
              <span>
                Acesse todo o conteúdo da formação Inova e suas atualizações.
              </span>
              <div className={styles.preco}>
                <div className={styles.valor}>
                  <p>
                    De <s>R$300,00</s> por
                  </p>
                  <h1> R$ 0,00</h1>
                </div>
                <a> 100% de desconto</a>
              </div>
              <button className={styles.btn}>COMEÇAR AGORA</button>
            </header>
            <footer>
              <ul>
                <li>Curso de proramação</li>
                <li>Curso de proramação</li>
                <li>Curso de proramação</li>
                <li>Curso de proramação</li>
                <li>Curso de proramação</li>
              </ul>
            </footer>
          </section>

          <section className={styles.card}>
            <header>
              <div className={styles.Top}>
                <div className={styles.icon}>
                  <GiAngelWings size={50} color="#485bff" />
                </div>
                <h3>PRO</h3>
              </div>
              <span>
                Acesse todo o conteúdo da formação Inova e suas atualizações.
              </span>
              <div className={styles.preco}>
                <div className={styles.valor}>
                  <p>
                    Plano anual de <b style={{ color: '#1266f1' }}>R$550,00</b>{' '}
                    por
                  </p>
                  <h1>
                    <span>12x de </span>R$ 45,90
                  </h1>
                </div>
              </div>
              <button className={styles.btnpro}>SEJA PRO</button>
            </header>
            <footer>
              <ul>
                <li>Curso de proramação</li>
                <li>Curso de proramação</li>
                <li>Curso de proramação</li>
                <li>Curso de proramação</li>
                <li>Curso de proramação</li>
                <li>Curso de proramação</li>
                <li>Curso de proramação</li>
                <li>Curso de proramação</li>
                <li>Curso de proramação</li>
                <li>Curso de proramação</li>
              </ul>
            </footer>
          </section>

          <section className={styles.card}>
            <header>
              <div className={styles.Top}>
                <div className={styles.icon}>
                  <GiSpikedSnail size={50} color="#e02525" />
                </div>
                <br />
                <h3>ULTIMATE</h3>
              </div>
              <span>
                Acesse todo o conteúdo da formação Inova e suas atualizações.
              </span>
              <div className={styles.preco}>
                <div className={styles.valor}>
                  <p>
                    Plano anual de{' '}
                    <b style={{ color: '#e02525' }}>R$1.138,80</b> por
                  </p>
                  <h1>
                    <span>12x de </span>R$ 94,90
                  </h1>
                </div>
              </div>
              <button className={styles.btnult}>ULTIMATE</button>
            </header>
            <footer>
              <ul>
                <li>Curso de proramação</li>
                <li>Curso de proramação</li>
                <li>Curso de proramação</li>
                <li>Curso de proramação</li>
                <li>Curso de proramação</li>
                <li>Curso de proramação</li>
                <li>Curso de proramação</li>
                <li>Curso de proramação</li>
                <li>Curso de proramação</li>
                <li>Curso de proramação</li>
                <li>Curso de proramação</li>
                <li>Curso de proramação</li>
                <li>Curso de proramação</li>
              </ul>
            </footer>
          </section>
        </div>
      </div>
    </>
  );
}
