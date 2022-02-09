/* eslint-disable @next/next/no-img-element */
import Modal from 'react-modal';
import * as React from 'react';
import { useRouter } from 'next/router';

import style from './styles.module.scss';
import {
  KBarAnimator,
  KBarProvider,
  KBarPortal,
  useDeepMatches,
  KBarPositioner,
  KBarSearch,
  KBarResults,
} from 'kbar';

import { useTranslation } from 'next-i18next';
import { BiCopyright, BiHome, BiMailSend } from 'react-icons/bi';
import {
  BsFillChatLeftTextFill,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from 'react-icons/bs';
import { SiWebpack } from 'react-icons/si';

interface ModalProps {
  onOpenRegisterModal: () => void;
  onRequestClose: () => void;
  isOpen: boolean;
}

export default function Search(props: ModalProps) {
  const router = useRouter();

  // Tionalization

  const { t } = useTranslation('popups');

  const actions = [
    {
      id: 'copy',
      name: 'Copy URL',
      shortcut: ['u'],
      keywords: 'copy-url',
      section: 'General',
      perform: () => navigator.clipboard.writeText(window.location.href),
      icon: <BiCopyright />,
    },
    {
      id: 'email',
      name: 'Send Email',
      shortcut: ['e'],
      keywords: 'send-email',
      section: 'General',
      perform: () => window.open('mailto:zno.rocha@gmail.com', '_blank'),
      icon: <BiMailSend />,
    },
    {
      id: 'source',
      name: 'View Source',
      shortcut: ['s'],
      keywords: 'view-source',
      section: 'General',
      perform: () =>
        window.open('https://github.com/zenorocha/zenorocha.com', '_blank'),
      icon: <SiWebpack />,
    },
    {
      id: 'home',
      name: 'Home',
      shortcut: ['g', 'h'],
      keywords: 'go-home',
      section: 'Go To',
      perform: () => router.push('/'),
      icon: <BiHome />,
    },
    {
      id: 'about',
      name: 'About',
      shortcut: ['g', 'a'],
      keywords: 'go-about',
      section: 'Go To',
      perform: () => router.push('/about'),
      icon: <BsFillChatLeftTextFill />,
    },

    {
      id: 'github',
      name: 'Github',
      shortcut: ['f', 'g'],
      keywords: 'go-github',
      section: 'Follow',
      perform: () => window.open('https://github.com/zenorocha', '_blank'),
      icon: <BsGithub />,
    },
    {
      id: 'twitter',
      name: 'Twitter',
      shortcut: ['f', 't'],
      keywords: 'go-twitter',
      section: 'Follow',
      perform: () => window.open('https://twitter.com/zenorocha', '_blank'),
      icon: <BsTwitter />,
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      shortcut: ['f', 'l'],
      keywords: 'go-linkedin',
      section: 'Follow',
      perform: () => window.open('https://linkedin.com/in/zenorocha', '_blank'),
      icon: <BsLinkedin />,
    },
    {
      id: 'instagram',
      name: 'Instagram',
      shortcut: ['f', 'i'],
      keywords: 'go-instagram',
      section: 'Follow',
      perform: () => window.open('https://instagram.com/zenorocha', '_blank'),
      icon: <BsInstagram />,
    },
  ];
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      ariaHideApp={false}
    >
      <div className={style['modal-container']}>
        <div className={style['content']}>
          <KBarProvider actions={actions}>
            <KBarPortal></KBarPortal>
          </KBarProvider>
        </div>
      </div>
    </Modal>
  );
}
