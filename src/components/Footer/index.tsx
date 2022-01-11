import Link from 'next/link';
import { ActiveLink } from '../ActiveLink';
import styles from './styles.module.scss';

import { IoIosArrowUp, IoLogoYoutube } from 'react-icons/io';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
} from 'react-icons/ai';

export default function Footer() {
  return (
    <div className={styles.container}>
      <footer className={styles.FooterConteiner}>
        <div className={styles.Container}>
          <div className={styles.Content}>
            <div className={styles.Left}>
              <a>
                <div className={styles.Logo}>
                  <img src="/img/iconeLogo.svg" alt="Logo" />
                  <h1>
                    Trainings <br />
                    <span> A R E O</span>
                  </h1>
                </div>
                <span className={styles.copy}>
                  Mareo&copy; 2021 <br /> Todos os direitos reservados
                </span>
              </a>
            </div>
            <nav className={styles.Right}>
              <ul>
                <span>Programas</span>
                <li>
                  <ActiveLink activateClassname={styles.active} href="/">
                    <a>Plano 1</a>
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink activateClassname={styles.active} href="/planos">
                    <a>Plano 3</a>
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink activateClassname={styles.active} href="/">
                    <a>Plano 3</a>
                  </ActiveLink>
                </li>
                <li>
                  <Link href="/planos">
                    <a>Plano 4</a>
                  </Link>
                </li>
              </ul>
              <ul>
                <span>Sobre</span>
                <li>
                  <Link href="/planos">
                    <a>O Mareo</a>
                  </Link>
                </li>
                <li>
                  <Link href="/planos">
                    <a>Direitos autorais</a>
                  </Link>
                </li>
                <li>
                  <ActiveLink activateClassname={styles.active} href="/terms">
                    <a>Termos de uso</a>
                  </ActiveLink>
                </li>
                <li>
                  <Link href="/privacy">
                    <a>Políticas de privacidade</a>
                  </Link>
                </li>
              </ul>
              <ul>
                <span>Dúvidas</span>
                <li>
                  <Link href="/planos">
                    <a>Comunidade</a>
                  </Link>
                </li>
                <li>
                  <Link href="/planos">
                    <a>Suporte</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.Bottom}>
            <div className={styles.Social}>
              <li className={styles.SocialIcon}>
                <ActiveLink activateClassname={styles.Icons} href="/dashboard">
                  <IoLogoYoutube size={30} />
                </ActiveLink>
              </li>
              <li className={styles.SocialIcon}>
                <ActiveLink activateClassname={styles.Icons} href="/planos">
                  <AiFillInstagram size={30} />
                </ActiveLink>
              </li>
              <li className={styles.SocialIcon}>
                <ActiveLink activateClassname={styles.Icons} href="/planos">
                  <AiFillFacebook size={30} />
                </ActiveLink>
              </li>
              <li className={styles.SocialIcon}>
                <ActiveLink activateClassname={styles.Icons} href="/planos">
                  <AiOutlineTwitter size={30} />
                </ActiveLink>
              </li>
              <li className={styles.SocialIcon}>
                <ActiveLink activateClassname={styles.Icons} href="/planos">
                  <AiOutlineGithub size={30} />
                </ActiveLink>
              </li>
              <li className={styles.SocialIcon}>
                <ActiveLink activateClassname={styles.Icons} href="/planos">
                  <AiFillLinkedin size={30} />
                </ActiveLink>
              </li>
            </div>
            <button type="button">
              <IoIosArrowUp />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
