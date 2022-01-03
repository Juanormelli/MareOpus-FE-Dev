import Link from 'next/link';
import styles from '../styles/404.module.scss';
//src/pages/404.tsx
export default function Custom404() {
  return (
    <>
      <div className={styles.content404}>
        <div className={styles.Conteiner}>
          <h1>
            <b>OOPS... </b>
            <br /> Página não encontrada
          </h1>
          <section className={styles.errorContainer}>
            <span className={styles.four}>
              <span className={styles.screenReaderText}>4</span>
            </span>
            <span className={styles.zero}>
              <span className={styles.screenReaderText}>0</span>
            </span>
            <span className={styles.four}>
              <span className={styles.screenReaderText}>4</span>
            </span>
          </section>
          <p className={styles.zoomArea}>
            <b>ERRO: </b> Não conseguimos encontrar a página que você está
            procurando...
          </p>
          <div className={styles.linkContainer}>
            <Link href="/">
              <a className={styles.moreLink}>Voltar para Home</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
