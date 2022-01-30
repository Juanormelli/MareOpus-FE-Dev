/* eslint-disable @next/next/no-img-element */
import style from './styles.module.scss';
//import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';
import { useTranslation } from 'next-i18next';

interface AvatarProps {
  //onOpenLoginModal: () => void;
  idx: number;
}
const Avatar: React.FC<AvatarProps> = () => {
  //const { t } = useTranslation();

  const [activeIndex, setActiveIndex] = useState(0);
  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(1);

  const [transUp, setTransUp] = useState(false);
  const [transDown, setTransDown] = useState(false);
  const [transL, setTransL] = useState(false);
  const [transR, setTransR] = useState(false);

  useEffect(() => {
    if (transDown) {
      setTimeout(() => {
        setTransDown(false);
        setIndex((index + 1) % foli.length);
        setIndex1((index1 + 1) % foli.length);
      }, 800);
    }
    if (transUp) {
      setTimeout(() => {
        setTransUp(false);
        setIndex((index + 1) % foli.length);
        setIndex1((index1 + 1) % foli.length);
      }, 800);
    }
  }, [transUp, transDown]);

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

  const avatres = [foli, ignis, casia, aurum, nox, mare];
  const handlePrev = () => {
    setTransDown(true);
    setTransUp(false);

    const nextIndex = index - 1;
    const nextIndex1 = index1 - 1;

    if (nextIndex < 0) {
      setIndex(foli.length - 1);
    } else {
      setIndex(nextIndex);
    }

    if (nextIndex1 < 0) {
      setIndex1(foli.length - 1);
    } else {
      setIndex1(nextIndex1);
    }
  };

  const handleNext = () => {
    setTransUp(true);
    setTransDown(false);
  };

  const handleImgClick = (idx) => {
    setActiveIndex(idx);

    if (idx < index) {
      setIndex(idx);
      setIndex1(idx + 1);
      setTransDown(true);
      setTransUp(false);
    } else {
      setIndex((idx - 1) % foli.length);
      setIndex1(idx % foli.length);
      handleNext();
    }
  };

  // Tionalization

  const { t } = useTranslation('common');

  return (
    <>
      <div className={style['contentavatar']}>
        <button className={style['Prev']} onClick={handlePrev}>
          <MdOutlineArrowBackIos size={20} />
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
          </div>
          <div className={style['data']}>
            <h3>FOLI</h3>
            <small>✅ {t('points10')}</small>
          </div>
        </div>
        <button className={style['Next']} onClick={handleNext}>
          <MdOutlineArrowForwardIos size={20} />
        </button>

        <ul className={style['category']}>
          {foli.map((el, idx) => {
            return (
              <li key={idx}>
                <input
                  className={`${
                    foli[activeIndex] === foli[idx]
                      ? 'border: none'
                      : 'opacity: 0'
                  }`}
                  type="radio"
                  onClick={() => handleImgClick(idx)}
                  name="foli"
                  id={el}
                />
                <span className={style['checkmark']}></span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Avatar;
