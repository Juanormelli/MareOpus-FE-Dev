import styles from '../../styles/Sobre.module.scss';
import '../../../i18n';
import { useTranslation } from 'react-i18next';
import { availableLanguages } from '../../../i18n';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { AiOutlineArrowDown } from 'react-icons/ai';
import Layout from '@/src/components/Layout';
export default function Sobre() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Layout pageTitle="Sobre">
        <div className={styles.pageConteiner}>
          <section className={styles.Conteiner} id="hero">
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
                    Somos uma <br /> <b>Programmers training</b>
                  </h3>
                </div>
                <h1 className={styles.textStyles}>
                  Aceleramos a sua <br />{' '}
                  <span>carreira através da educação</span>
                </h1>
                <p>
                  Aqui você dominará as principais tecnologias de uma forma
                  diferente podendo alcançar a sonhada carreira através de
                  nossos colaboradores construindo a sua jornada profissional.
                </p>
                <a className={styles.button}>
                  Saiba mais
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
