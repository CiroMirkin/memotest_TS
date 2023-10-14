import GameBoardView, { picture } from './gameBoradView';
import { getID } from './getID';
import { icon } from './icons';

const convertIConIntoPicture = ({ src, pairID }: icon): picture => ({
    src,
    pairID,
    id: getID(),
});
  
  const createPictureListForBoard = (icons: Array<icon>): Array<picture> => {
    const duplicatedIcons = [...icons, ...icons];
    const pictureList = duplicatedIcons.map((icon) => convertIConIntoPicture(icon));
    const pictureListForBoard  = pictureList.sort(() => Math.random() - 0.5);
    return pictureListForBoard;
}
  
export const gameBoardController = (iconList: Array<icon>) => {
    const pictureList = createPictureListForBoard(iconList);
  
    const boardContent = new GameBoardView(pictureList).getHTMLPictureList();
    document.getElementById('game-board')!.appendChild(boardContent);
}