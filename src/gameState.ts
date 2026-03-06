import { icon } from './iconInterface';

export interface CardState {
  id: string;
  pairId: string;
  src: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export interface GameState {
  cards: CardState[];
  flippedCards: string[];
  matchedPairs: number;
  isGameWon: boolean;
}

export interface IconPackState {
  name: string;
  image: string;
  icons: icon[];
}

export const createInitialState = (icons: icon[]): GameState => {
  const duplicatedIcons = [...icons, ...icons];
  const shuffledCards = shuffleArray(duplicatedIcons);
  
  return {
    cards: shuffledIconsToCards(shuffledCards),
    flippedCards: [],
    matchedPairs: 0,
    isGameWon: false
  };
};

const shuffleArray = <T>(array: T[]): T[] => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const shuffledIconsToCards = (icons: icon[]): CardState[] => {
  return icons.map((icon, index) => ({
    id: `card-${index}-${Math.random().toString(36).substr(2, 9)}`,
    pairId: icon.pairID,
    src: icon.src,
    isFlipped: false,
    isMatched: false
  }));
};
