/* eslint-disable @next/next/no-img-element */
import { FiX } from 'react-icons/fi';
import { GoPerson } from 'react-icons/go';
import { MdLogin } from 'react-icons/md';
import styles from './styles.module.scss';
import { ActiveLink } from '../ActiveLink';

export default function Header() {
  interface HeaderProps {
    onOpenLoginModal: () => void;
  }

  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <img src="/img/Logo.svg" alt="Logo" />
          <nav>
            <ActiveLink activateClassname={styles.active} href="/">
              <a>Home</a>
            </ActiveLink>
            <ActiveLink activateClassname={styles.active} href="/posts">
              <a>Posts</a>
            </ActiveLink>
          </nav>
          <ul className={styles.access}>
            <a className={styles.navbar_link}>
              <img src="/icon/entar.svg" alt="entrar" />
              ENTRAR
            </a>
            <button type="button" className={styles.signinButton}>
              <a>REGISTRAR</a>
            </button>
            <a className={styles.lengButton}>
              <img src="/icon/PORTUGUES.svg" alt="Portugues" />
            </a>
            <a className={styles.lengButton}>
              <img src="/icon/INGLES.svg" alt="Inglês" />
            </a>
            <a className={styles.lengButton}>
              <img src="/icon/ESPANHOL.svg" alt="Espanhol" />
            </a>
          </ul>
        </div>
      </header>
    </>
  );
}
