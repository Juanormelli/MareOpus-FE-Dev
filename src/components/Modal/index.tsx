import Modal from 'react-modal';
import { useEffect, useState } from 'react';
import { signIn, useSession } from 'next-auth/client';

import style from '../Modal/styles.module.scss';
import { consumers } from 'stream';

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
    setMessage('');
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

  const [message, setMessage] = useState('');

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
          <button
            className={style['modal-close']}
            type="submit"
            onClick={props.onRequestClose}
          >
            ✖
          </button>
          <h1>Login</h1>
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
          <button onClick={handleLogin} className={style['loginError']}>
            Login
          </button>
          <div>
            <p>Nao possui cadastro ainda? Clique aqui</p>
            <button className={style['register-button']}>Cadastre-se</button>
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
          <button
            className={style['modal-close']}
            type="submit"
            onClick={props.onRequestClose}
          >
            ✖
          </button>
          <h1>Login</h1>
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
          <button onClick={handleLogin}>Login</button>
          <div>
            <p>Nao possui cadastro ainda? Clique aqui</p>
            <button
              className={style['register-button']}
              onClick={props.onOpenRegisterModal}
            >
              Cadastre-se
            </button>
          </div>
        </div>
      </Modal>
    );
  }
}
