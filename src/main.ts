import { showGameBoard } from './gameBoardController';
import { icon } from './icons';
import './style.css'
import { ToggleAmountOfPlayers } from './indexController';
// import typescriptLogo from './typescript.svg'

interface iconListInterface {
    iconsName: string;
    iconsImage: string;
    icons: Array<icon>
}

let iconList: Array<iconListInterface>;
let actualIconsList: iconListInterface

const res = await fetch("https://ciromirkin.github.io/memotest_API/icons.txt");
const iconListFromAPIREST = await res.json();
iconList = iconListFromAPIREST;
actualIconsList = iconList[0]
showGameBoard(actualIconsList.icons);

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
    showGameBoard(actualIconsList.icons);
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
    const btnForToggleTheColorMode = document.getElementById("btn-for-toggle-the-color-mode")!;
    if(actualTheme == 'light') {
        btnForToggleTheColorMode.classList.replace('icon--moon', 'icon--sun');
        bodyElement.setAttribute('theme', 'dark')
    }
    else {
        btnForToggleTheColorMode.classList.replace('icon--sun', 'icon--moon');
        bodyElement.setAttribute('theme', 'light')
    }
}
