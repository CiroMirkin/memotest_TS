import GameBoardView, { picture } from './gameBoardView';
import { getID } from './getID';
import { icon } from './iconInterface';

const convertIConIntoIndex = ({ src, pairID }: icon): picture => ({
    src,
    pairID,
    id: getID(),
});
  
  const getIndexListForTheGameBoard = (icons: Array<icon>): Array<picture> => {
    const duplicatedIcons = [...icons, ...icons];
    const indexList = duplicatedIcons.map((icon) => convertIConIntoIndex(icon));
    const indexListForBoard  = indexList.sort(() => Math.random() - 0.5);
    return indexListForBoard;
}
  
export const showGameBoard = (iconList: Array<icon>) => {
    const indexListForGameBoard = getIndexListForTheGameBoard(iconList);
  
    const indexElementsInTheGameBoard = new GameBoardView(indexListForGameBoard).getHTMLPictureList();
    const gameBoardELement = document.getElementById('game-board')!
    gameBoardELement.innerHTML = '';
    gameBoardELement.appendChild(indexElementsInTheGameBoard);
}