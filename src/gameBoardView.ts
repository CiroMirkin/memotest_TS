import { GameState } from './gameState';
import { renderCard } from './cardView';

export const renderGameBoard = (state: GameState): DocumentFragment => {
  const fragment = document.createDocumentFragment();
  
  state.cards.forEach(cardState => {
    fragment.appendChild(renderCard(cardState));
  });
  
  return fragment;
};
