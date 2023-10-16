import { showGameBoard } from './showGameBoard';
import { icons } from './icons';
import './style.css'
import { resetGameBoardController } from './gameBoardController';
// import typescriptLogo from './typescript.svg'

const iconList = icons;
showGameBoard(iconList);

const resetBtn = document.getElementById("reset-btn")!;
resetBtn.addEventListener('click', () => {
    resetGameBoardController();
    showGameBoard(iconList);
})