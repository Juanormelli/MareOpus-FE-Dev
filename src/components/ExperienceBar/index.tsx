import React, { useContext } from 'react';
import styles from './styles.module.scss';
import { ChallengesContext } from '../../contexts/ChallengesContext';
export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } =
    useContext(ChallengesContext);

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;
  return (
    <header className={styles.experienceBar}>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span
          className={styles.currentExperience}
          style={{ left: `${percentToNextLevel}%` }}
        >
          {currentExperience}
        </span>
      </div>

      <span className={styles.avatar}>
        {experienceToNextLevel}
        <img src="/avatar/foli/foli10.svg" alt="" />
      </span>
    </header>
  );
}
