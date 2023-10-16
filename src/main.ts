import { showGameBoard } from './showGameBoard';
import { icons } from './icons';
import './style.css'
import { ToggleAmountOfPlayers, resetGameBoardController } from './gameBoardController';
// import typescriptLogo from './typescript.svg'

const iconList = icons;
showGameBoard(iconList);

const resetBtn = document.getElementById("reset-btn")!;
resetBtn.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const actionName: string = target.parentElement?.getAttribute('action') || "";
    if(!!actionName) {
        actionList.forEach(action => {
            if(action.name == actionName) action.do()
        });
    }
})

interface action {
    name: string,
    do: Function
}

const actionList: Array<action> = [
    {
        name: "reset",
        do: () => resetGameBoard()
    },
    {
        name: "toggleAmountOfPlayers",
        do: () => {
            resetGameBoard();
            toggleAmountOfPLayers();
        } 
    }
]

const resetGameBoard = () => {
    resetGameBoardController();
    showGameBoard(iconList);
}
const toggleAmountOfPLayers = (): void => ToggleAmountOfPlayers();