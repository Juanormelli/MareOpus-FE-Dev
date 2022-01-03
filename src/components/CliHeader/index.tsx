/* eslint-disable @next/next/no-img-element */
import { MdLogin, MdOutlineExplore } from 'react-icons/md';
import styles from './styles.module.scss';
import { useTranslation } from 'next-i18next';
import { BsFillBellFill, BsTranslate } from 'react-icons/bs';
import { SiCodeigniter } from 'react-icons/si';
import { AiOutlineHome, AiFillSetting, AiOutlineUser } from 'react-icons/ai';
import { GoChecklist, GoReport, GoSearch } from 'react-icons/go';
import { TiMessages } from 'react-icons/ti';
import { ActiveLink } from '../ActiveLink';
import { useCallback, useState } from 'react';
import { FiUserPlus } from 'react-icons/fi';

interface NavbarProps {
  //onOpenLoginModal: () => void;
}
const CliHeader: React.FC<NavbarProps> = () => {
  const { t, i18n } = useTranslation();

  const [open, setOpen] = useState<boolean>(false);
  const [isAside, setAside] = useState<number>(0);

  const handleOpen = useCallback(
    (close = false): void => {
      if (close) {
        setOpen(false);
      } else {
        setOpen(!open);
      }
    },
    [open]
  );

  return (
    <>
      <header className={styles.headerContainer}>
        {/* Menu na horizontal */}
        <nav className={styles.top}>
          <div className={styles.logo} onClick={(): void => handleOpen()}>
            <img src="/img/iconeLogo.svg" alt="Logo" />
            <h2>AREO</h2>
          </div>
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
              <ActiveLink activateClassname={styles.active} href="/planos">
                <img
                  src="https://avatars.githubusercontent.com/u/62891985?v=4"
                  alt="avatar"
                />
              </ActiveLink>
            </li>
          </ul>
        </nav>

        {/* Menu na vertical */}
        <div className={styles.Container}>
          <aside>
            <div className={styles.sidebar}>
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
            </div>
          </aside>
        </div>
      </header>
    </>
  );
};

export default CliHeader;
