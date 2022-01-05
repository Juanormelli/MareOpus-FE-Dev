import style from './styles.module.scss';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';

interface AvatarProps {
  //onOpenLoginModal: () => void;
}
const Avatar: React.FC<AvatarProps> = () => {
  const { t, i18n } = useTranslation();

  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(1);
  const [transUp, setTransUp] = useState(false);
  const [transDown, setTransDown] = useState(false);
  const [transL, setTransL] = useState(false);
  const [transR, setTransR] = useState(false);

  const foli = [
    '/avatar/foli/foli.svg',
    '/avatar/foli/foli10.svg',
    '/avatar/foli/foli50.svg',
    '/avatar/foli/foli100.svg',
    '/avatar/foli/foli250.svg',
  ];

  const ignis = [
    '/avatar/ignis/ignis.svg',
    '/avatar/ignis/ignis10.svg',
    '/avatar/ignis/ignis50.svg',
    '/avatar/ignis/ignis100.svg',
    '/avatar/ignis/ignis250.svg',
  ];
  const casia = [
    '/avatar/casia/casia.svg',
    '/avatar/casia/casia10.svg',
    '/avatar/casia/casia50.svg',
    '/avatar/casia/casia100.svg',
    '/avatar/casia/casia250.svg',
  ];
  const aurum = [
    '/avatar/aurum/aurum.svg',
    '/avatar/aurum/aurum10.svg',
    '/avatar/aurum/aurum50.svg',
    '/avatar/aurum/aurum100.svg',
    '/avatar/aurum/aurum250.svg',
  ];
  const nox = [
    '/avatar/nox/nox.svg',
    '/avatar/nox/nox10.svg',
    '/avatar/nox/nox50.svg',
    '/avatar/nox/nox100.svg',
    '/avatar/nox/nox250.svg',
  ];
  const mare = [
    '/avatar/mare/mare.svg',
    '/avatar/mare/mare10.svg',
    '/avatar/mare/mare50.svg',
    '/avatar/mare/mare100.svg',
    '/avatar/mare/mare250.svg',
  ];

  const handleNext = () => {
    setTransUp(true);
    setTransDown(false);
  };

  const handlePrev = () => {
    setIndex((index + 1) % foli.length);
    setIndex1((index1 + 1) % foli.length);
  };
  return (
    <>
      <div className={style['contentavatar']}>
        <button className={style['Prev']} onClick={handlePrev}>
          <MdOutlineArrowBackIos />
        </button>
        <div className={style['imgBox']}>
          <div className={style['foli']}>
            <div className={style['slider']}>
              <div className={style['flame']}></div>
              <div className={style['flame']}></div>
              <div className={style['flame']}></div>
              <div className={style['flame']}></div>
              <img src={foli[index]} className={style['intFoli']} />
              <img src={foli[index1]} className={style['intFoli']} />
            </div>
            <h3>FOLI</h3>

            <small>✅ Ganhe 10 pontos de energia</small>
          </div>
          <ul className={style['type']}>
            <li>
              <img src="/avatar/foli/foli.svg" alt="foli" />
            </li>
            <li>
              <img src="/avatar/foli/foli10.svg" alt="foli10" />
            </li>
            <li>
              <img src="/avatar/foli/foli50.svg" alt="foli50" />
            </li>
            <li>
              <img src="/avatar/foli/foli100.svg" alt="foli100" />
            </li>
            <li>
              <img src="/avatar/foli/foli250.svg" alt="foli250" />
            </li>
          </ul>
        </div>

        <ul className={style['category']}>
          <li>
            <input type="radio" name="foli" id="foli" />
            <span className={style['checkmark']}></span>
          </li>
          <li>
            <input type="radio" name="ignes" id="ignes" />
            <span className={style['checkmark']}></span>
          </li>
          <li>
            <input type="radio" name="casia" id="casia" />
            <span className={style['checkmark']}></span>
          </li>
          <li>
            <input type="radio" name="aurum" id="aurum" />
            <span className={style['checkmark']}></span>
          </li>
          <li>
            <input type="radio" name="nox" id="nox" />
            <span className={style['checkmark']}></span>
          </li>
          <li>
            <input type="radio" name="mare" id="mare" />
            <span className={style['checkmark']}></span>
          </li>
        </ul>
        <button className={style['Next']} onClick={handleNext}>
          <MdOutlineArrowForwardIos />
        </button>
      </div>
    </>
  );
};

export default Avatar;
