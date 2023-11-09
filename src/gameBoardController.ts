import GameBoardView, { picture } from './gameBoardView';
import { getID } from './getID';
import { icon } from './iconInterface';

const convertIConIntoCard = ({ src, pairID }: icon): picture => ({
    src,
    pairID,
    id: getID(),
});
  
  const getCardListForTheGameBoard = (icons: Array<icon>): Array<picture> => {
    const duplicatedIcons = [...icons, ...icons];
    const cardList = duplicatedIcons.map((icon) => convertIConIntoCard(icon));
    const cardListForBoard  = cardList.sort(() => Math.random() - 0.5);
    return cardListForBoard;
}
  
export const showGameBoard = (iconList: Array<icon>) => {
    const cardListForGameBoard = getCardListForTheGameBoard(iconList);
  
    const cardElementsInTheGameBoard = new GameBoardView(cardListForGameBoard).getCardElements();
    const gameBoardELement = document.getElementById('game-board')!
    gameBoardELement.innerHTML = '';
    gameBoardELement.appendChild(cardElementsInTheGameBoard);
}