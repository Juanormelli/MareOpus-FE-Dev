/* eslint-disable @next/next/no-img-element */
import Modal from 'react-modal';
import { useEffect, useState, useContext } from 'react';

import style from '../Modal/styles.module.scss';
import { consumers } from 'stream';
import { signIn } from 'next-auth/client';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { BsFillEyeFill, BsFillEyeSlashFill, BsGoogle } from 'react-icons/bs';
import { useTranslation } from 'next-i18next';
import { FaArrowRight, FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

interface ModalProps {
  onOpenRegisterModal: () => void;
  onRequestClose: () => void;
  isOpen: boolean;
}

let messageError = '';

export default function ModalLogin(props: ModalProps) {
  const [email, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const eye = <BsFillEyeFill size={16} color="#00bd55" />;
  const eyeslash = <BsFillEyeSlashFill size={16} color="#00bd55" />;

  function openModalClear() {
    setPassword('');
    setUser('');
    setMessage('Usuario não conseguio logar');
  }

  function handleLogin() {
    signIn('credentials', {
      redirect: false,
      emailname: email,
      password: password,
    }).then((message) => {
      if (message?.error) {
        messageError = message?.error;
        setMessage(messageError);
      } else {
        props.onRequestClose();
        return true;
      }
    });
  }

  const [message, setMessage] = useState('Usuraio não consegui logar');

  useEffect(() => {}, [message]);

  // Tionalization

  const { t } = useTranslation('popups');

  if (message !== '') {
    return (
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        onAfterClose={openModalClear}
        ariaHideApp={false}
      >
        <div className={style['modal-container']}>
          <div className={style['content-left']}>
            <h1>LOGIN</h1>
            <button
              className={style['google']}
              type="submit"
              onClick={() => signIn('google')}
            >
              <div className={style['logoGoogle']}>
                <BsGoogle size={29} color="#FFFFFF" />
              </div>
              <b>{t('logingoogle')}</b>
            </button>
            <div className={style['line']}>
              <hr />
              <span>{t('or')}</span>
              <hr />
            </div>
            <div className={style['inputform']}>
              <div className={style['iconinput']}>
                <MdEmail size={16} color="#202024" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(event) => {
                  setUser(event.target.value);
                }}
                placeholder={t('email')}
              />
            </div>
            <div className={style['inputform']}>
              <div className={style['iconinput']}>
                <FaLock size={16} color="#202024" />
              </div>
              <input
                type={passwordShown ? 'text' : 'password'}
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                placeholder={t('password')}
              />
              <a tabIndex={-1} onClick={togglePasswordVisiblity}>
                {passwordShown ? eyeslash : eye}
              </a>
            </div>
            <small className={style['error']}>{messageError}</small>
            <div className={style['boxbottton']}>
              <a>{t('forgot')}</a>
              <div className={style['checkbox']}>
                <input
                  type="checkbox"
                  name="remeber"
                  id="login-remeber"
                  color="#00bd55"
                  data-testid="login-remeber"
                />
                <label htmlFor="login-remeber">{t('remember')}</label>
              </div>
            </div>

            <button onClick={handleLogin} className={style['loginError']}>
              {t('login')}
            </button>
          </div>
          <div className={style['content-right']}>
            <button
              className={style['modal-close']}
              type="submit"
              onClick={props.onRequestClose}
            >
              ✖
            </button>
            <img src="/img/Logo.svg" alt="Logo" className={style['imgLogin']} />
            <h2>{t('welcome')}</h2>
            <img src="/img/group.svg" alt="Grupo" className={style['grupo']} />
            <p>{t('description')}</p>
            <div className={style['contentBottom']}>
              <span>{t('text')}</span>
              <button className={style['register-button']}>
                {t('goSubscribe')}
                <div className={style['ArrowRight']}>
                  <FaArrowRight size={20} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </Modal>
    );
  } else {
    return (
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        onAfterClose={openModalClear}
        ariaHideApp={false}
      >
        <div className={style['modal-container']}>
          <div className={style['content-left']}>
            <h1>LOGIN</h1>
            <button
              className={style['google']}
              type="submit"
              onClick={() => signIn('google')}
            >
              <div className={style['logoGoogle']}>
                <BsGoogle size={29} color="#FFFFFF" />
              </div>
              <b>{t('logingoogle')}</b>
            </button>
            <div className={style['line']}>
              <hr />
              <span>{t('or')}</span>
              <hr />
            </div>
            <div className={style['inputform']}>
              <div className={style['iconinput']}>
                <MdEmail size={16} />
              </div>
              <input
                type="email"
                value={email}
                onChange={(event) => {
                  setUser(event.target.value);
                }}
                placeholder={t('email')}
              />
            </div>
            <div className={style['inputform']}>
              <div className={style['iconinput']}>
                <FaLock size={16} />
              </div>
              <input
                type={passwordShown ? 'text' : 'password'}
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                placeholder={t('password')}
              />

              <a tabIndex={-1} onClick={togglePasswordVisiblity}>
                {passwordShown ? eyeslash : eye}
              </a>
            </div>
            <small className={style['error']}>{messageError}</small>
            <div className={style['boxbottton']}>
              <a>{t('forgot')}</a>
              <div className={style['checkbox']}>
                <input
                  type="checkbox"
                  name="remeber"
                  id="login-remeber"
                  data-testid="login-remeber"
                  checked
                />
                <label htmlFor="login-remeber">{t('remember')}</label>
              </div>
            </div>
            <button onClick={handleLogin} className={style['loginError']}>
              {t('login')}
            </button>
          </div>
          <div className={style['content-right']}>
            <button
              className={style['modal-close']}
              type="submit"
              onClick={props.onRequestClose}
            >
              ✖
            </button>
            <img src="/img/Logo.svg" alt="Logo" className={style['imgLogin']} />
            <h2>{t('welcome')}</h2>
            <img src="/img/group.svg" alt="Grupo" className={style['grupo']} />
            <p>{t('description')}</p>

            <div className={style['contentBottom']}>
              <span>{t('text')}</span>
              <button
                onClick={props.onOpenRegisterModal}
                className={style['register-button']}
              >
                {t('goSubscribe')}
                <div className={style['ArrowRight']}>
                  <FaArrowRight size={20} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}
