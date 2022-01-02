import Link from 'next/link';
import styles from '../styles/500.module.scss';
//src/pages/500.tsx
export default function Custom500() {
  return (
    <>
      <div className={styles.content500}>
        <div className={styles.Conteiner}>
          <h1>
            <b>OOPS... </b>
            <br /> Ocorreu um erro do lado do servidor
          </h1>
          <section className={styles.errorContainer}>
            <span className={styles.five}>
              <span className={styles.screenReaderText}>5</span>
            </span>
            <span className={styles.zero}>
              <span className={styles.screenReaderText}>0</span>
            </span>
            <span className={styles.five}>
              <span className={styles.screenReaderText}>0</span>
            </span>
          </section>
          <p className={styles.zoomArea}>
            <b>ERRO: </b> Não conseguimos encontrar a página que você está
            procurando...{' '}
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
