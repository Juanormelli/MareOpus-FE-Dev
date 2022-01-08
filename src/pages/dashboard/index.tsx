import {
  GiAbdominalArmor,
  GiAlgae,
  GiAppleSeeds,
  GiArchaeopteryxFossil,
  GiAstronautHelmet,
  GiAtom,
  GiBiceps,
  GiBrain,
  GiBurningMeteor,
  GiBurningSkull,
  GiCowled,
  GiDeadWood,
  GiDuration,
  GiEagleEmblem,
  GiEarthAmerica,
  GiFireBottle,
  GiGroundSprout,
  GiMaterialsScience,
  GiProcessor,
  GiTechnoHeart,
  GiWorld,
} from 'react-icons/gi';
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
                <div className={styles.categoria}>
                  <h1>Contagem de medalhas</h1>
                  <a href=""> Exibir tudo</a>
                  <button>
                    <GiEarthAmerica />
                    Todos
                  </button>
                </div>
                <div className={styles.medalha}>
                  <ul>
                    <li>
                      <GiAbdominalArmor size={30} />
                    </li>
                    <li>
                      <GiAlgae size={30} />
                    </li>
                    <li>
                      <GiBiceps size={30} />
                    </li>
                    <li>
                      <GiBurningSkull size={30} />
                    </li>
                    <li>
                      <GiFireBottle size={30} />
                    </li>
                    <li>
                      <GiGroundSprout size={30} />
                    </li>
                    <li>
                      <GiBurningMeteor size={30} />
                    </li>
                    <li>
                      <GiBrain size={30} />
                    </li>
                  </ul>
                </div>
              </header>
              <footer>
                <div className={styles.categoria}>
                  <h1>Contagem de trofels</h1>
                  <a href=""> Exibir tudo</a>
                  <button>Todos</button>
                </div>
                <div className={styles.trofel}>
                  <ul>
                    <li>
                      <GiMaterialsScience size={30} color="#1266f1" />
                    </li>
                    <li>
                      <GiAstronautHelmet size={30} />
                    </li>
                    <li>
                      <GiCowled size={30} color="#555555" />
                    </li>
                    <li>
                      <GiTechnoHeart size={30} color="#e02525" />
                    </li>
                    <li>
                      <GiDuration size={30} />
                    </li>
                    <li>
                      <GiEagleEmblem size={30} />
                    </li>
                  </ul>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
