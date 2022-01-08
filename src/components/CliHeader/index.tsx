/* eslint-disable @next/next/no-img-element */
import { MdLiveHelp, MdLogin, MdOutlineExplore } from 'react-icons/md';
import styles from './styles.module.scss';
import { useTranslation } from 'next-i18next';
import { BsFillBellFill, BsTranslate } from 'react-icons/bs';
import { SiCodeigniter } from 'react-icons/si';
import { AiOutlineHome, AiFillSetting, AiOutlineUser } from 'react-icons/ai';
import { GoChecklist, GoReport, GoSearch } from 'react-icons/go';
import { TiMessages } from 'react-icons/ti';
import { ActiveLink } from '../ActiveLink';
import { useCallback, useEffect, useState } from 'react';
import { FiUserPlus } from 'react-icons/fi';
import { FaDatabase, FaUser } from 'react-icons/fa';
import { IoIosTimer } from 'react-icons/io';
import { HiOutlineLogin } from 'react-icons/hi';

interface NavbarProps {
  //onOpenLoginModal: () => void;
}
const CliHeader: React.FC<NavbarProps> = () => {
  //const { t, i18n } = useTranslation();

  const [leftMenu, setLeftMenu] = useState(false);
  const handleOpenMenuLeft = () => setLeftMenu(!leftMenu);

  const [toogleMenu, setToogleMenu] = useState(false);
  const handleOpenMenuToggle = () => setToogleMenu(!toogleMenu);

  return (
    <>
      <header className={styles.headerContainer}>
        {/* Menu na horizontal */}
        <div className={styles.top}>
          <div className={styles.logo}>
            <img
              src="/img/iconeLogo.svg"
              alt="Logo"
              onClick={handleOpenMenuLeft}
              className={
                leftMenu === false
                  ? styles.imgLogo
                  : styles.imgLogo + ' ' + styles.activeLeft
              }
            />
            <h2>AREO</h2>
          </div>
          <nav className={`${styles.header__content__nav}`}>
            <ul className={styles.navigation}>
              <li>
                <ActiveLink activateClassname={styles.active} href="/dashboard">
                  <b>Home</b>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink activateClassname={styles.active} href="/planos">
                  <b>Planos</b>
                </ActiveLink>
              </li>
              <li className={styles.space}>
                <a>
                  <GoSearch size={25} />
                </a>
                <a>
                  <BsTranslate size={25} />
                </a>
                <a>
                  <FiUserPlus size={25} />
                </a>
                <a>
                  <BsFillBellFill size={25} />
                </a>
              </li>
              <li>
                <div className={styles.action}>
                  <div className={styles.profile}>
                    <img
                      src="https://avatars.githubusercontent.com/u/62891985?v=4"
                      alt="avatar"
                      onClick={handleOpenMenuToggle}
                      className={
                        toogleMenu === false
                          ? styles.imgPerfil
                          : styles.imgPerfil + ' ' + styles.activemenu
                      }
                    />
                  </div>
                  <div
                    className={
                      toogleMenu === false
                        ? styles.menuPerfil
                        : styles.menuPerfil + ' ' + styles.activemenu
                    }
                  >
                    <ul>
                      <li>
                        <FaUser />
                        <a>Meu perfil</a>
                      </li>
                      <li>
                        <FaDatabase />
                        <a href=""> Meus Dados</a>
                      </li>
                      <li>
                        <MdLiveHelp />
                        <a href="">Pedir ajuda</a>
                      </li>
                      <li>
                        <IoIosTimer />
                        <a href="">Histórico</a>
                      </li>
                      <li>
                        <HiOutlineLogin />
                        <a href="">Sai da Plataforma</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>

        {/* Menu na vertical */}
        <div
          className={
            leftMenu === false
              ? styles.Container
              : styles.Container + ' ' + styles.activeLeft
          }
        >
          <nav>
            <ul className={styles.sidebar}>
              <ActiveLink activateClassname={styles.active} href="/dashboard">
                <a>
                  <AiOutlineHome size={26} />
                  <h3>Início</h3>
                </a>
              </ActiveLink>
              <ActiveLink activateClassname={styles.active} href="/planos">
                <a>
                  <MdOutlineExplore size={26} />
                  <h3>Explorar</h3>
                </a>
              </ActiveLink>

              <ActiveLink activateClassname={styles.active} href="/planos">
                <a>
                  <AiOutlineUser size={26} />
                  <h3>Meu Perfil</h3>
                </a>
              </ActiveLink>

              <ActiveLink activateClassname={styles.active} href="/planos">
                <a>
                  <GoChecklist size={26} />
                  <h3>Meus Cursos</h3>
                </a>
              </ActiveLink>

              <ActiveLink activateClassname={styles.active} href="/planos">
                <a>
                  <SiCodeigniter size={26} />
                  <h3>Meus Programas</h3>
                </a>
              </ActiveLink>

              <ActiveLink activateClassname={styles.active} href="/planos">
                <a>
                  <TiMessages size={26} />
                  <h3>
                    Notificações
                    <span className={styles.materialIconsSharp}>25</span>
                  </h3>
                </a>
              </ActiveLink>

              <ActiveLink activateClassname={styles.active} href="/planos">
                <a>
                  <GoReport size={26} />
                  <h3>Treinamentos</h3>
                </a>
              </ActiveLink>

              <ActiveLink activateClassname={styles.active} href="/planos">
                <a>
                  <AiFillSetting size={26} />
                  <h3>Histórico</h3>
                </a>
              </ActiveLink>
              <ActiveLink activateClassname={styles.active} href="/">
                <a>
                  <h3>Logout</h3>
                  <MdLogin size={20} />
                </a>
              </ActiveLink>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default CliHeader;
