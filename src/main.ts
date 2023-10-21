import { showGameBoard } from './gameBoardController';
import { icons } from './icons';
import './style.css'
import { ToggleAmountOfPlayers, resetGameBoard as resetIndexes } from './indexController';
// import typescriptLogo from './typescript.svg'

const iconList = icons;
showGameBoard(iconList);

document.body.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const actionName: string = target.getAttribute('action') || "";
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
        do: () => {
            resetGameBoard()
        }
    },
    {
        name: "toggleAmountOfPlayers",
        do: () => {
            resetGameBoard();
            toggleAmountOfPLayers();
            toggleIconOfTheBtnForToggleTheAmountOfPlayers()
        } 
    },
    {
        name: "toggleColorMode",
        do: () => changeColorMode()
    }
]

const resetGameBoard = () => {
    resetIndexes();
    showGameBoard(iconList);
}
const toggleAmountOfPLayers = (): void => ToggleAmountOfPlayers();
const toggleIconOfTheBtnForToggleTheAmountOfPlayers = () => {
    const btnForToggleTheAmountOfPlayers = document.querySelector("#btn-for-toggle-the-amount-of-players")!;
    if(btnForToggleTheAmountOfPlayers.classList[2] == 'icon--user') {
        btnForToggleTheAmountOfPlayers.classList.replace('icon--user', 'icon--users')
    }
    else {
        btnForToggleTheAmountOfPlayers.classList.replace('icon--users', 'icon--user')
    }
}

const changeColorMode = () => {
    const bodyElement = document.body;
    const actualTheme = bodyElement.getAttribute('theme');
    if(actualTheme == 'light') {
        bodyElement.setAttribute('theme', 'dark')
    }
    else {
        bodyElement.setAttribute('theme', 'light')
    }
}
