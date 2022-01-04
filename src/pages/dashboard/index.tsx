import CliHeader from '../../components/CliHeader';
import styles from '../../styles/Dashboard.module.scss';

export default function Dashboard() {
  return (
    <>
      <main className={styles.pageConteiner}>
        <br />
        <div className={styles.status}>
          <h1>Olá, nome</h1>
          <div className={styles.Container}>
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
