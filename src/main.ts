import { showGameBoard } from './gameBoardController';
import { icon } from './icons';
import './style.css'
import { ToggleAmountOfPlayers, resetIndexControllesGlobalStates } from './indexController';
import { showIConPacks } from './iconPacksView';
import { hideUserWonSing } from './userWonSingView';
// import typescriptLogo from './typescript.svg'

interface iconListInterface {
    iconsName: string;
    iconsImage: string;
    icons: Array<icon>
}

let iconList: Array<iconListInterface>;
let actualIconsList: iconListInterface

interface iconPack { iconsImage: string, iconsName: string }

export const getIconsByName = (iconsName: string): Array<icon> => iconList.filter(icons => icons.iconsName == iconsName)[0].icons;
export const getIConsPackByName = (iconsName: string): iconPack => {
    const icons = iconList.filter(icons => icons.iconsName == iconsName)[0];
    return { iconsImage: icons.iconsImage, iconsName: icons.iconsName };
}

const res = await fetch("https://ciromirkin.github.io/memotest_API/icons.txt");
const iconListFromAPIREST = await res.json();
iconList = iconListFromAPIREST;
actualIconsList = iconList[0]
showGameBoard(actualIconsList.icons);

const iconPacks = iconList.map(({ iconsImage, iconsName }) => ({ iconsImage, iconsName}));
showIConPacks(iconPacks)

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
            resetGameBoard(actualIconsList.icons)
            resetIndexControllesGlobalStates();
            hideUserWonSing()
        }
    },
    {
        name: "toggleAmountOfPlayers",
        do: () => {
            resetGameBoard(actualIconsList.icons);
            resetIndexControllesGlobalStates();
            toggleAmountOfPLayers();
            toggleIconOfTheBtnForToggleTheAmountOfPlayers()
        } 
    },
    {
        name: "toggleColorMode",
        do: () => changeColorMode()
    }
]

export const resetGameBoard = (iconsInGameBoard: Array<icon>) => {
    showGameBoard(iconsInGameBoard);
    actualIconsList = iconList.filter(icons => icons.icons[0].src == iconsInGameBoard[0].src)[0];
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
