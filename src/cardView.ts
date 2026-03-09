import { CardState } from './gameState';

export const renderCard = (cardState: CardState): HTMLElement => {
  const cardElement = document.createElement('li');
  cardElement.classList.add('card');
  
  if (cardState.isMatched) {
    cardElement.classList.add('card--selected');
    cardElement.classList.add('card--pleyer-two-color');
  } else if (!cardState.isFlipped) {
    cardElement.classList.add('card--no-selected');
  }
  
  cardElement.setAttribute('id', cardState.id);
  cardElement.setAttribute('pairid', cardState.pairId);
  
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('card__img-container');
  imgContainer.style.backgroundImage = `url(${cardState.src})`;
  
  cardElement.appendChild(imgContainer);
  
  return cardElement;
};

export const hideCard = (card: HTMLElement): void => card.classList.add('card--no-selected');
export const showCard = (card: HTMLElement): void => card.classList.remove('card--no-selected');
