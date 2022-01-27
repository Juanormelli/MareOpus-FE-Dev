/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss';
import { ActiveLink } from '../ActiveLink';
//import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { useSession } from 'next-auth/client';
import { useEffect, useState } from 'react';
//import Link from 'next/link';

import { GrClose } from 'react-icons/gr';
import { IoIosArrowDown } from 'react-icons/io';

import { useTranslation } from 'next-i18next';
import { LangSwitcher } from '../LangSwitcher';
//import { i18n } from '../../../i18n';
//import { i18n } from '../../../next-i18next.config';
//import { Link, useHistory } from 'react-router-dom';

interface HeaderProps {
  onOpenLoginModal: () => void;
  onOpenRegisterModal: () => void;
  onOpenSession: () => void;
  //changeLanguage: string;
}

export default function Header(props: HeaderProps) {
  const [toogleMenu, setToogleMenu] = useState(false);
  const handleOpenMenuToggle = () => setToogleMenu(!toogleMenu);
  // Abrir Meu
  //const history = useHistory();
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  const [session] = useSession();

  useEffect(() => {}, [session]);

  // Tionalization

  const { t } = useTranslation('menu');

  const [langMenu, setLangMenu] = useState(true);
  const handleOpenMenuLang = () => setLangMenu(!langMenu);

  if (session) {
    return (
      <>
        <header className={styles.header}>
          <div className={styles.header__content}>
            <ActiveLink activateClassname={styles.imgLogin} href="/">
              <img src="/img/Logo.svg" alt="Logo" className={styles.imgLogin} />
            </ActiveLink>

            <nav
              className={`${styles.header__content__nav} ${
                menuOpen && size.width < 768 ? styles.isMenu : ''
              }`}
            >
              <ul className={styles.navigation}>
                <li>
                  <ActiveLink activateClassname={styles.active} href="/">
                    <a>{t('home')}</a>
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink activateClassname={styles.active} href="/planos">
                    <a>{t('plans')}</a>
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink
                    activateClassname={styles.active}
                    href="/dashboard"
                  >
                    <a>
                      {t('formation')}
                      <div className={styles.action}>
                        <span className={styles.boxArrow}>
                          <b
                            onAbort={handleOpenMenuToggle}
                            className={
                              toogleMenu === false
                                ? styles.ArrowDown
                                : styles.ArrowDown + ' ' + styles.activemenu
                            }
                          >
                            <IoIosArrowDown />
                          </b>
                        </span>

                        <div
                          className={
                            toogleMenu === false
                              ? styles.menuPerfil
                              : styles.menuPerfil + ' ' + styles.activemenu
                          }
                        >
                          <ul>
                            <li>
                              <a>Meu perfil</a>
                            </li>
                            <li>
                              <a href=""> Meus Dados</a>
                            </li>
                            <li>
                              <a href="">Pedir ajuda</a>
                            </li>
                            <li>
                              <a href="">Histórico</a>
                            </li>
                            <li>
                              <a href="">Sai da Plataforma</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </a>
                  </ActiveLink>
                </li>

                <li>
                  <ActiveLink activateClassname={styles.active} href="/sobre">
                    <a>{t('about')}</a>
                  </ActiveLink>
                </li>
                <li>
                  <a
                    className={styles.navbar_link}
                    onClick={props.onOpenLoginModal}
                  >
                    <img src="/icon/entar.svg" alt="entrar" />
                    {t('login')}
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    className={styles.signinButton}
                    onClick={props.onOpenRegisterModal}
                  >
                    <a>{t('register')}</a>
                  </button>
                </li>
              </ul>
              <LangSwitcher />
            </nav>
            <div className={styles.__content__toggle}>
              {!menuOpen ? (
                <img src="/icon/menu.svg" alt="open" />
              ) : (
                <GrClose onClick={menuToggleHandler} />
              )}
            </div>
          </div>
        </header>
      </>
    );
  } else {
    return (
      <>
        <header className={styles.header}>
          <div className={styles.header__content}>
            <img src="/img/Logo.svg" alt="Logo" className={styles.imgLogin} />

            <nav
              className={`${styles.header__content__nav} ${
                menuOpen && size.width < 768 ? styles.isMenu : ''
              }`}
            >
              <ul className={styles.navigation}>
                <li>
                  <ActiveLink activateClassname={styles.active} href="/">
                    <a>{t('home')}</a>
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink activateClassname={styles.active} href="/planos">
                    <a>{t('plans')}</a>
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink
                    activateClassname={styles.active}
                    href="/formacoes"
                  >
                    <a>
                      {t('formation')}
                      {/*<div className={styles.action}>
                        <span className={styles.boxArrow}>
                          <b
                            onAbort={handleOpenMenuToggle}
                            className={
                              toogleMenu === false
                                ? styles.ArrowDown
                                : styles.ArrowDown + ' ' + styles.activemenu
                            }
                          >
                            <IoIosArrowDown />
                          </b>
                        </span>

                        <div
                          className={
                            toogleMenu === false
                              ? styles.menuPerfil
                              : styles.menuPerfil + ' ' + styles.activemenu
                          }
                        >
                          <ul>
                            <li>
                              <a>Meu perfil</a>
                            </li>
                            <li>
                              <a href=""> Meus Dados</a>
                            </li>
                            <li>
                              <a href="">Pedir ajuda</a>
                            </li>
                            <li>
                              <a href="">Histórico</a>
                            </li>
                            <li>
                              <a href="">Sai da Plataforma</a>
                            </li>
                          </ul>
                        </div>
                        </div>*/}
                    </a>
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink activateClassname={styles.active} href="/sobre">
                    <a>{t('about')}</a>
                  </ActiveLink>
                </li>
                <li>
                  <a
                    className={styles.navbar_link}
                    onClick={props.onOpenLoginModal}
                  >
                    <img src="/icon/entar.svg" alt="entrar" />
                    {t('login')}
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={props.onOpenRegisterModal}
                    className={styles.signinButton}
                  >
                    <b>{t('register')}</b>
                  </button>
                </li>
              </ul>
              <LangSwitcher />
            </nav>
            <div className={styles.__content__toggle}>
              {!menuOpen ? (
                <img src="/icon/menu.svg" alt="open" />
              ) : (
                <GrClose onClick={menuToggleHandler} />
              )}
            </div>
          </div>
        </header>
      </>
    );
  }
}
