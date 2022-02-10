/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import { useSession } from 'next-auth/client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

export function LangSwitcher(props: {}) {
  const router = useRouter();
  const showPt = router.locale === 'pt';
  const showEn = router.locale === 'en';
  const showEs = router.locale === 'es';
  const [color, setColor] = useState(false);

  return (
    <>
      <div className={styles.contenerFlag}>
        {!showPt && (
          <Link href="/" locale="pt">
            <button type="button" className={styles.lengButton}>
              <img
                className={styles.lengFlag}
                src="/icon/PORTUGUES.svg"
                alt="Portugues"
              />
            </button>
          </Link>
        )}
        {showPt && (
          <Link href="/" locale="pt">
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
          <Link href="/en/" locale="en">
            <button type="button" className={styles.lengButton}>
              <img
                src="/icon/INGLES.svg"
                className={styles.activeLeng}
                alt="Inglês"
              />
            </button>
          </Link>
        )}
        {!showEn && (
          <Link href="/en/" locale="en">
            <button type="button" className={styles.lengButton}>
              <img
                src="/icon/INGLES.svg"
                className={styles.lengFlag}
                alt="Inglês"
              />
            </button>
          </Link>
        )}
        {showEs && (
          <Link href="/es/" locale="es">
            <button type="button" className={styles.lengButton}>
              <img
                src="/icon/ESPANHOL.svg"
                className={styles.activeLeng}
                alt="Espanhol"
              />
            </button>
          </Link>
        )}
        {!showEs && (
          <Link href="/es/" locale="es">
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
