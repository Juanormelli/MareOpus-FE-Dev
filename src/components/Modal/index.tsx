import Modal from 'react-modal';
import { useEffect, useState } from 'react';

import style from '../Modal/styles.module.scss';
import { consumers } from 'stream';
import { signIn } from 'next-auth/client';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { BsGoogle } from 'react-icons/bs';

interface ModalProps {
  onOpenRegisterModal: () => void;
  onRequestClose: () => void;
  isOpen: boolean;
}

let messageError = '';

export default function ModalLogin(props: ModalProps) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  function openModalClear() {
    setPassword('');
    setUser('');
    setMessage('Usuario não conseguio logar');
  }

  function handleLogin() {
    signIn('credentials', {
      redirect: false,
      username: user,
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
              <b>Entar com Google</b>
            </button>
            <span>
              <b>ou</b>
            </span>
            <input
              type="text"
              value={user}
              onChange={(event) => {
                setUser(event.target.value);
              }}
              placeholder="Usuario"
            />
            <input
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              placeholder="Senha"
            />
            <small className={style['error']}>{messageError}</small>
            <br />
            <a> Esqueci minha senha</a>
            <button onClick={handleLogin} className={style['loginError']}>
              ENTRAR
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
            <h2>Bem-vindo</h2>
            <img src="/img/group.svg" alt="Grupo" className={style['grupo']} />
            <p>Aqui crescemos juntos na sua carreira profissional.</p>

            <button className={style['register-button']}>
              <div className={style['ArrowLeft']}>
                <HiArrowNarrowLeft size={20} />
              </div>
              Cadastre-se
            </button>
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
              <b>Entar com Google</b>
            </button>
            <span>
              <b>ou</b>
            </span>
            <input
              type="text"
              value={user}
              onChange={(event) => {
                setUser(event.target.value);
              }}
              placeholder="Usuario"
            />
            <input
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              placeholder="Senha"
            />
            <small className={style['error']}>{messageError}</small>
            <br />
            <a> Esqueci minha senha</a>
            <button onClick={handleLogin} className={style['loginError']}>
              ENTRAR
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
            <h2>Bem-vindo</h2>
            <img src="/img/group.svg" alt="Grupo" className={style['grupo']} />
            <p>Aqui crescemos juntos na sua carreira profissional.</p>

            <button
              onClick={props.onOpenRegisterModal}
              className={style['register-button']}
            >
              <div className={style['ArrowLeft']}>
                <HiArrowNarrowLeft size={20} />
              </div>
              Cadastre-se
            </button>
          </div>
        </div>
      </Modal>
    );
  }
}
