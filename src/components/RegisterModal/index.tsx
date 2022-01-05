import { useEffect, useState } from 'react';
import Modal from 'react-modal';

import style from './styles.module.scss';
import axios from 'axios';
import { BsGoogle } from 'react-icons/bs';
import { signOut } from 'next-auth/client';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import Avatar from '../Avatar';

interface RegisterModalProps {
  onRequestClose(): void;
  isOpen: boolean;
}

interface IRegisterUser {
  username: string;
  email: string;
  password: string;
}

let testes: any;
export default function RegisterModal(props: RegisterModalProps) {
  const [email, setEmail] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');

  function openModalClear() {
    setEmail('');
    setPassword('');
    setUser('');
    setMessage('');
    setPasswordConf('');
  }

  async function registerUser({ email, password, username }: IRegisterUser) {
    const response = await axios
      .post('https://deploy.techposts.com.br/users', {
        email: email,
        password: password,
        username: username,
      })
      .then((response) => {
        return response;
      })
      .catch((response) => {
        return response;
      });
    if (response.data !== undefined) {
      const responseSucess = {
        data: 'Congrats the user register sucsess',
        statusCode: 200,
      };
      return responseSucess;
    } else {
      const responseError = {
        data: response.response.data.message,
        statusCode: 400,
      };
      return responseError;
    }
  }

  const [message, setMessage] = useState('');
  if (passwordConf !== password && message !== 'As Senhas sao diferentes') {
    setMessage('As Senhas sao diferentes');
  } else if (
    passwordConf === password &&
    message === 'As Senhas sao diferentes'
  ) {
    setMessage('');
  }

  async function teste() {
    testes = await registerUser({ email, password, username: user });
    if (testes.statusCode !== 200) {
      setMessage(testes.data);
      console.log(message);
    } else {
      alert('Usuario Cadastrado com sucesso Parabens!');
      document.location = document.location;
    }
  }
  useEffect(() => {}, [message]);

  if (message === 'As Senhas sao diferentes') {
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
            <h1>Crie sua conta</h1>
            <button className={style['google']} type="submit">
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
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              placeholder="E-mail"
            />
            <input
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              placeholder="Senha"
            />
            <input
              type="password"
              value={passwordConf}
              onChange={(event) => {
                setPasswordConf(event.target.value);
              }}
              placeholder="Comfirme a Senha"
            />
            <br />
            <small className={style['error']}>{message}</small>
            <button
              className={style['loginError']}
              onClick={() => {
                alert('As senhas precisam ser iguais');
              }}
            >
              Cadastrar
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
            <h2>Escolha o seu avatar</h2>
            <Avatar />
            <p>Aqui cressemos juntos no seu carreira profissional.</p>

            <button className={style['register-button']}>
              <div className={style['ArrowLeft']}>
                <HiArrowNarrowLeft size={20} />
              </div>
              Voltar para Login
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
            <h1>Crie sua conta</h1>
            <button className={style['google']} type="submit">
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
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              placeholder="E-mail"
            />
            <input
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              placeholder="Senha"
            />
            <input
              type="password"
              value={passwordConf}
              onChange={(event) => {
                setPasswordConf(event.target.value);
              }}
              placeholder="Comfirme a Senha"
            />
            <br />
            <small className={style['error']}>{message}</small>
            <button className={style['loginError']} onClick={teste}>
              Cadastrar
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
            <h2>Escolha o seu avatar</h2>
            <Avatar />
            <p>Aqui cressemos juntos no seu carreira profissional.</p>

            <button onClick={teste} className={style['register-button']}>
              <div className={style['ArrowLeft']}>
                <HiArrowNarrowLeft size={20} />
              </div>
              Voltar para Login
            </button>
          </div>
        </div>
      </Modal>
    );
  }
}
