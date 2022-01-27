/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { ActiveLink } from '../ActiveLink';
import styles from './styles.module.scss';
import { useTranslation } from 'next-i18next';
import { IoIosArrowUp, IoLogoYoutube } from 'react-icons/io';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [btnUp, setBtnUp] = useState(false);
  useEffect(() => {
    if (btnUp) {
      window.scrollTo(0, 0);
    }
  }, [btnUp]);
  const handleBtnUp = () => {
    setBtnUp(true);
  };

  // Tionalization
  const { t } = useTranslation('footer');

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
                  Mareo&copy; 2021 <br /> {t('rights')}
                </span>
              </a>
            </div>
            <nav className={styles.Right}>
              <ul role={'list'}>
                <span>{t('program')}</span>
                <li role={'listitem'}>
                  <ActiveLink activateClassname={styles.active} href="/">
                    <a>{t('learner')}</a>
                  </ActiveLink>
                </li>
                <li role={'listitem'}>
                  <ActiveLink activateClassname={styles.active} href="/planos">
                    <a>{t('spark')}</a>
                  </ActiveLink>
                </li>
                <li role={'listitem'}>
                  <ActiveLink activateClassname={styles.active} href="/">
                    <a>{t('sage')}</a>
                  </ActiveLink>
                </li>
                <li role={'listitem'}>
                  <Link href="/planos">
                    <a>{t('news')}</a>
                  </Link>
                </li>
              </ul>
              <ul role={'list'}>
                <span>{t('about')}</span>
                <li role={'listitem'}>
                  <Link href="/planos">
                    <a>{t('abouts')}</a>
                  </Link>
                </li>
                <li role={'listitem'}>
                  <Link href="/planos">
                    <a>{t('copyright')}</a>
                  </Link>
                </li>
                <li role={'listitem'}>
                  <ActiveLink activateClassname={styles.active} href="/terms">
                    <a>{t('terms')}</a>
                  </ActiveLink>
                </li>
                <li role={'listitem'}>
                  <Link href="/privacy">
                    <a>{t('privacy')}</a>
                  </Link>
                </li>
              </ul>
              <ul role={'list'}>
                <span>{t('doubt')}</span>
                <li role={'listitem'}>
                  <Link href="/planos">
                    <a>{t('community')}</a>
                  </Link>
                </li>
                <li role={'listitem'}>
                  <Link href="/planos">
                    <a>{t('support')}</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.Bottom}>
            <div className={styles.Social}>
              <ul>
                <li className={styles.SocialIcon}>
                  <ActiveLink
                    activateClassname={styles.Icons}
                    href="https://www.youtube.com/channel/UCbJIGH7tKHJSbkJ8Mc_OX7A"
                  >
                    <IoLogoYoutube size={30} />
                  </ActiveLink>
                </li>
                <li className={styles.SocialIcon}>
                  <ActiveLink activateClassname={styles.Icons} href="/sobre">
                    <AiFillInstagram size={30} />
                  </ActiveLink>
                </li>
                <li className={styles.SocialIcon}>
                  <ActiveLink
                    activateClassname={styles.Icons}
                    href="https://mail.google.com/"
                  >
                    <AiFillFacebook size={30} />
                  </ActiveLink>
                </li>
                <li className={styles.SocialIcon}>
                  <ActiveLink activateClassname={styles.Icons} href="/privacy">
                    <AiOutlineTwitter size={30} />
                  </ActiveLink>
                </li>
                <li className={styles.SocialIcon}>
                  <ActiveLink
                    activateClassname={styles.Icons}
                    href="https://github.com/Juanormelli/MareOpus-FE-Dev"
                  >
                    <AiOutlineGithub size={30} />
                  </ActiveLink>
                </li>
                <li className={styles.SocialIcon}>
                  <ActiveLink
                    activateClassname={styles.Icons}
                    href="/dashboard"
                  >
                    <AiFillLinkedin size={30} />
                  </ActiveLink>
                </li>
              </ul>
            </div>
            <button
              onClick={handleBtnUp}
              tabIndex={0}
              aria-label="top"
              role="button"
              aria-pressed="false"
            >
              <IoIosArrowUp />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
