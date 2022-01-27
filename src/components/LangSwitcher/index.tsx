/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

export function LangSwitcher(props: {}) {
  const router = useRouter();
  const showEn = router.locale === 'pt';
  const [color, setColor] = useState();
  useEffect(() => {}, []);
  return (
    <>
      <div className={styles.contenerFlag}>
        {!showEn && (
          <Link href="/pt" locale="pt">
            <button type="button" className={styles.lengButton}>
              <img
                className={styles.activeLeng}
                src="/icon/PORTUGUES.svg"
                alt="Portugues"
              />
            </button>
          </Link>
        )}
        {showEn && (
          <Link href="/pt" locale="pt">
            <button type="button" className={styles.lengButton}>
              <img
                className={styles.activeLeng}
                src="/icon/PORTUGUES.svg"
                alt="Portugues"
              />
            </button>
          </Link>
        )}
        {showEn && (
          <Link href="/" locale="en">
            <button type="button" className={styles.lengButton}>
              <img
                src="/icon/INGLES.svg"
                className={styles.lengFlag}
                alt="Inglês"
              />
            </button>
          </Link>
        )}
        {!showEn && (
          <Link href="/" locale="en">
            <button type="button" className={styles.lengButton}>
              <img
                src="/icon/INGLES.svg"
                className={styles.lengFlag}
                alt="Inglês"
              />
            </button>
          </Link>
        )}
        {showEn && (
          <Link href="/" locale="es">
            <button type="button" className={styles.lengButton}>
              <img
                src="/icon/ESPANHOL.svg"
                className={styles.lengFlag}
                alt="Espanhol"
              />
            </button>
          </Link>
        )}
        {!showEn && (
          <Link href="/" locale="es">
            <button type="button" className={styles.lengButton}>
              <img
                src="/icon/ESPANHOL.svg"
                className={styles.lengFlag}
                alt="Espanhol"
              />
            </button>
          </Link>
        )}
      </div>
    </>
  );
}
