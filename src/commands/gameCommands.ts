import { GameState } from '../gameState';
import { icon } from '../iconInterface';
import { createInitialState } from '../gameState';

export const flipCard = (state: GameState, cardId: string): GameState => {
  const card = state.cards.find(c => c.id === cardId);
  if (!card || card.isFlipped || card.isMatched) return state;
  if (state.flippedCards.length >= 2) return state;
  
  const newFlippedCards = [...state.flippedCards, cardId];
  const newCards = state.cards.map(c => 
    c.id === cardId ? { ...c, isFlipped: true } : c
  );
  
  return {
    ...state,
    cards: newCards,
    flippedCards: newFlippedCards
  };
};

export const checkMatch = (state: GameState): GameState => {
  if (state.flippedCards.length !== 2) return state;
  
  const [card1Id, card2Id] = state.flippedCards;
  const card1 = state.cards.find(c => c.id === card1Id)!;
  const card2 = state.cards.find(c => c.id === card2Id)!;
  
  if (card1.pairId === card2.pairId) {
    const newMatchedPairs = state.matchedPairs + 1;
    const isGameWon = newMatchedPairs === state.cards.length / 2;
    
    return {
      ...state,
      cards: state.cards.map(c => 
        c.pairId === card1.pairId ? { ...c, isMatched: true } : c
      ),
      matchedPairs: newMatchedPairs,
      flippedCards: [],
      isGameWon
    };
  }
  
  return {
    ...state,
    flippedCards: []
  };
};

export const hideUnmatchedCards = (state: GameState): GameState => {
  return {
    ...state,
    cards: state.cards.map(c => 
      !c.isMatched ? { ...c, isFlipped: false } : c
    )
  };
};

export const resetGame = (icons: icon[]): GameState => {
  return createInitialState(icons);
};
