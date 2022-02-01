import { createContext, useState, ReactNode, useEffect } from 'react';
import Cookies from 'js-cookie';
import challenges from '../../challenges.json';

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  experienceToNextLevel: number;
  challengesCampleted: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  closeLevelUpModal: () => void;
  completeChallenge: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({
  children,
  ...rest
}: ChallengesProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(
    rest.currentExperience ?? 0
  );
  const [challengesCampleted, setChallengesCampleted] = useState(
    rest.challengesCompleted ?? 0
  );

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  /*useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    Cookies.set('level', String(level));
    Cookies.set('currentExperience', String(currentExperience));
    Cookies.set('challengesCampleted', String(challengesCampleted));
  }, [level, currentExperience, challengesCampleted]);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    new Audio('/notification.mp3').play();

    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    } else {
      new Notification('Novo desafio 🎉', {
        body: `Valendo 💎 ${challenge.amount}xp!`,
      });
    }
  }

  function completeChallenge() {
    let finalExprerience = currentExperience + amount;

    if (finalExprerience >= experienceToNextLevel) {
      finalExprerience = finalExprerience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExprerience);

    setChallengesCampleted(challengesCampleted + 1);
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCampleted,
        levelUp,
        experienceToNextLevel,
        startNewChallenge,
        completeChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );*/
}
