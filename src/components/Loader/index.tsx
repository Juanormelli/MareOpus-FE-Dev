import React from 'react';
import styles from './styles.module.scss';
export default function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <img src="/img/loadings.gif" alt="Loader" />
    </div>
  );
}
