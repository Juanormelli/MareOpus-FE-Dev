import React from 'react';
import styles from './styles.module.scss';
import { GiRingedPlanet } from 'react-icons/gi';
import { HiCheck, HiOutlineInformationCircle } from 'react-icons/hi';
import { BiCheckShield } from 'react-icons/bi';
import { IoHelpCircleOutline } from 'react-icons/io5';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { FaGrav, FaUserAstronaut } from 'react-icons/fa';
export default function Planos() {
  function NoobList(props) {
    const cursos = props.cursos;
    const listCourse = cursos.map((text) => (
      <>
        <li>
          <HiCheck size={26} color="#00bd55" />
          {text}
          <IoHelpCircleOutline size={20} />
        </li>
      </>
    ));
    return <ul>{listCourse}</ul>;
  }
  function ProList(props) {
    const cursos = props.cursos;
    const listCourse = cursos.map((text) => (
      <>
        <li>
          <HiCheck size={26} color="#485bff" />
          {text}
          <IoHelpCircleOutline size={20} />
        </li>
      </>
    ));
    return <ul>{listCourse}</ul>;
  }

  function UltimateList(props) {
    const cursos = props.cursos;
    const listCourse = cursos.map((text) => (
      <>
        <li>
          <HiCheck size={26} color="#e02525" />
          {text}
          <IoHelpCircleOutline size={20} />
        </li>
      </>
    ));
    return <ul>{listCourse}</ul>;
  }
  const cursos = [
    'StartCode',
    'Atualizações inclusas',
    'Oportunidades de trabalho',
    'Desafios práticos',
  ];
  const cursoPro = [
    'StartCode',
    'Atualizações inclusas',
    'Oportunidades de trabalho',
    'Desafios práticos',
    'Acesso a TODOS os cursos',
    'Suporte prioritário',
    'Encontros ao vivo',
    'Acesso ao código fonte do projeto',
    'Certificado',
  ];
  const cursoUlt = [
    'StartCode',
    'Atualizações inclusas',
    'Oportunidades de trabalho',
    'Desafios práticos',
    'Acesso a TODOS os cursos',
    'Suporte prioritário',
    'Encontros ao vivo',
    'Acesso ao código fonte do projeto',
    'Construção de portfólio',
    'Certificado',
  ];

  return (
    <>
      <div className={styles.plano}>
        <div className={styles.TitleConteriner}>
          <h1 role={'heading'} className={styles.textStyles}>
            Aceleramos a sua <br /> <span>carreira através da educação</span>
          </h1>
          <p>
            Não importa se você já programa há anos ou está começando do zero. A
            Rocketseat é para todas e todos os devs, em todos os momentos de
            carreira.
          </p>
        </div>
        <div className={styles.cards}>
          <motion.section
            whileHover={{ scale: 1.1 }}
            transition={{ delay: 0, duration: 0.5 }}
            whileTap={{
              scale: 0.3,
            }}
            className={styles.card}
          >
            <header>
              <div className={styles.Top}>
                <div className={styles.icon}>
                  <FaGrav size={50} color="#00bd55" />
                </div>
                <h3>NOOB</h3>
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
                <NoobList cursos={cursos} />
              </ul>
            </footer>
          </motion.section>

          <motion.section
            whileHover={{ scale: 1.1 }}
            transition={{ delay: 0, duration: 0.5 }}
            whileTap={{
              scale: 0.3,
            }}
            className={styles.card}
          >
            <header>
              <div className={styles.Top}>
                <div className={styles.icon}>
                  <FaUserAstronaut size={50} color="#485bff" />
                </div>
                <h3>PRO DEV</h3>
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
                <ProList cursos={cursoPro} />
              </ul>
            </footer>
          </motion.section>

          <motion.section
            whileHover={{ scale: 1.1 }}
            transition={{ delay: 0, duration: 0.5 }}
            whileTap={{
              scale: 1,
            }}
            className={styles.card}
          >
            <span className={styles.recommended}>Recomendado para você</span>
            <header>
              <div className={styles.Top}>
                <div className={styles.icon}>
                  <GiRingedPlanet size={50} color="#e02525" />
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
                <UltimateList cursos={cursoUlt} />
              </ul>
            </footer>
          </motion.section>
        </div>
        <div className={styles.waring}>
          <div className={styles.iconInfo}>
            <HiOutlineInformationCircle size={25} color="#00bd55" />
          </div>
          <span>Todos os planos são de assinatura anual.</span>
        </div>
        <div className={styles.paymentMathods}>
          <strong>Formas de pagamento</strong>
          <ul>
            <li>
              <div className={styles.methodLogo}>
                <div className={styles.methodCont}>
                  <img src="/icon/Visa.svg" alt="visa" />
                </div>
              </div>
            </li>
            <li>
              <div className={styles.methodLogo}>
                <div className={styles.methodCont}>
                  <img src="/icon/mastercard.svg" alt="mastercard" />
                </div>
              </div>
            </li>
            <li>
              <div className={styles.methodLogo}>
                <div className={styles.methodCont}>
                  <img src="/icon/paypal.svg" alt="" />
                </div>
              </div>
            </li>
          </ul>
          <div className={styles.safeBuy}>
            <div className={styles.iconInfo}>
              <BiCheckShield size={50} color="#00bd55" />
            </div>
            <strong>
              Compra <b>100% segura</b>
            </strong>
          </div>
        </div>
      </div>
    </>
  );
}
