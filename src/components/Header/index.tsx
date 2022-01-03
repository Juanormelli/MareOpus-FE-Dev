/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss';
import { ActiveLink } from '../ActiveLink';
import { useTranslation } from 'next-i18next';
//import { signOut, useSession } from 'next-auth/client';
import { useEffect } from 'react';

interface HeaderProps {
  onOpenLoginModal: () => void;
  onOpenSession: () => void;
}

export default function Header(props: HeaderProps) {
  //const [session] = useSession();

  //const sessionCustomized: any = session?.user;

  // useEffect(() => {}, [session]);
  const { t, i18n } = useTranslation();
  //if (session) {
  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <img src="/img/Logo.svg" alt="Logo" className={styles.imgLogin} />
          <div className={styles.toggle}></div>
          <ul className={styles.navigation}>
            <li>
              <ActiveLink activateClassname={styles.active} href="/">
                <a>Home</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activateClassname={styles.active} href="/planos">
                <a>{t('planos')}</a>
              </ActiveLink>
            </li>
            <li>
              <a
                className={styles.navbar_link}
                onClick={props.onOpenLoginModal}
              >
                <img src="/icon/entar.svg" alt="entrar" />
                ENTRAR
              </a>
            </li>
            <li>
              <button
                type="button"
                className={styles.signinButton}
                onClick={props.onOpenSession}
              >
                <a>REGISTRAR</a>
              </button>
            </li>
            <li>
              <a className={styles.lengButton}>
                <img src="/icon/PORTUGUES.svg" alt="Portugues" />
              </a>
              <a className={styles.lengButton}>
                <img src="/icon/INGLES.svg" alt="Inglês" />
              </a>
              <a className={styles.lengButton}>
                <img src="/icon/ESPANHOL.svg" alt="Espanhol" />
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
  /*} else {
    return (
      <>
        <header className={styles.headerContainer}>
          <div className={styles.headerContent}>
            <img src="/img/Logo.svg" alt="Logo" className={styles.imgLogin} />
            <div className={styles.toggle}></div>
            <ul className={styles.navigation}>
              <li>
                <ActiveLink activateClassname={styles.active} href="/">
                  <a>Home</a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink activateClassname={styles.active} href="/planos">
                  <a>{t('planos')}</a>
                </ActiveLink>
              </li>
              <li>
                <a
                  className={styles.navbar_link}
                  onClick={props.onOpenLoginModal}
                >
                  <img src="/icon/entar.svg" alt="entrar" />
                  ENTRAR
                </a>
              </li>
              <li>
                <button type="button" className={styles.signinButton}>
                  <a>REGISTRAR</a>
                </button>
              </li>
              <li>
                <a className={styles.lengButton}>
                  <img src="/icon/PORTUGUES.svg" alt="Portugues" />
                </a>
                <a className={styles.lengButton}>
                  <img src="/icon/INGLES.svg" alt="Inglês" />
                </a>
                <a className={styles.lengButton}>
                  <img src="/icon/ESPANHOL.svg" alt="Espanhol" />
                </a>
              </li>
            </ul>
          </div>
        </header>
      </>
    );
  }*/
}
