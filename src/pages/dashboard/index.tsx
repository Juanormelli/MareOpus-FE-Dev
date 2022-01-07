import CliHeader from '../../components/CliHeader';
import { ExperienceBar } from '../../components/ExperienceBar';
import styles from '../../styles/Dashboard.module.scss';

export default function Dashboard() {
  return (
    <>
      <main className={styles.pageConteiner}>
        <br />
        <div className={styles.status}>
          <header className={styles.statusTitle}>
            <h1>Olá, nome</h1>
          </header>
          <div className={styles.Container}>
            <div className={styles.card}>
              <header className={styles.statusHeader}>
                <div className={styles.perfil}>
                  <img
                    src="https://avatars.githubusercontent.com/u/62891985?v=4"
                    alt="imagem de perfil"
                  />
                </div>

                <section className={styles.perfilCont}>
                  <h1>Meu Perfil</h1>
                  <p>0 visualizações nos ultimos 7 dias</p>
                  <button>VISUALIZAR PERFIL</button>
                </section>
              </header>
              <footer>
                <h2>
                  Nível do perfil: <b>Básico</b>
                </h2>
                <ExperienceBar />
              </footer>
            </div>
            <div className={styles.card}>
              <header className={styles.statusHeader}>
                <img src="/img/Logo.svg" alt="imagem de perfil" />
              </header>
              <footer>
                <h2>tetetstt</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae iure et ea, ab a temporibus nemo illo aspernatur
                  veniam veritatis voluptate praesentium nesciunt dolore
                  consectetur aperiam optio sed odio repudiandae!
                </p>
              </footer>
            </div>
            <div className={styles.card}>
              <header className={styles.statusHeader}>
                <img src="/img/Logo.svg" alt="imagem de perfil" />
              </header>
              <footer>
                <h2>tetetstt</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae iure et ea, ab a temporibus nemo illo aspernatur
                  veniam veritatis voluptate praesentium nesciunt dolore
                  consectetur aperiam optio sed odio repudiandae!
                </p>
              </footer>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
