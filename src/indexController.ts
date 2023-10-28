import { changeColorSignalForPlayer, hideColorSignalForPlayer, hideIndex, selectIndex, showColorSignalForPlayer, showIndex } from "./indexView";

export { }

export type players = 'red' | 'blue';
let count: 0 | 1 | 2 = 0;
let firstIndexID: string;

type PlayersAmount = 1 | 2;

let amountOfPlayers: PlayersAmount = 1;
let playCount: 0 | 1 | 2 = 0;

export const getAmountOfPLayers = (): PlayersAmount => amountOfPlayers;

const whoPlayerIsPlaying = (): players => {
    if(amountOfPlayers == 1) return "blue";

    if(playCount == 1) return 'blue';
    if(playCount == 2) {
        playCount=0;
        return "red";
    }
    return "red";
}

export const ToggleAmountOfPlayers = () => {
    if(amountOfPlayers == 1) {
        amountOfPlayers = 2;
        showColorSignalForPlayer(whoPlayerIsPlaying());
    } 
    else {
        amountOfPlayers = 1;
        hideColorSignalForPlayer(whoPlayerIsPlaying());
    }
};

const resetGlobalStates = ():void => {
    count = 0;
    playCount = 0;
    firstIndexID = '';
}

const isAnIndex = (target: HTMLElement) => target.parentElement?.classList[1] == 'index--no-selected' ? true : false;

const gameBoardHTMLElement = document.getElementById('game-board')!;
gameBoardHTMLElement.addEventListener('click', async (firstEvent: MouseEvent) => {
    const target = firstEvent.target as HTMLElement;
    if (isAnIndex(target)) {
        count++;
        const indexTarget = target.parentElement!;
        showIndex(indexTarget);
        if(count == 1) {
            firstIndexID = indexTarget.id;
        }
        if(count == 2) {
            count = 0;
            check(firstIndexID, indexTarget.id)
        }
    }
})

const check = (index1ID: string, index2ID: string): void => {
    const index1 = document.getElementById(index1ID)!;
    const index2 = document.getElementById(index2ID)!;
    const firstPairID = index1.getAttribute('pairid') as string;
    const secondPairID = index2.getAttribute('pairid') as string;
    if (firstPairID == secondPairID && index1ID != index2ID) {
        const player = whoPlayerIsPlaying();
        setTimeout(() => {
            selectIndex({index: index1, player });
            selectIndex({index: index2, player});
        }, 300)
    }
    else {
        playCount++;
        setTimeout(() => {
            hideIndex(index1);
            hideIndex(index2);
            
            if(amountOfPlayers == 2) changeColorSignalForPlayer();
        }, 400)
    }
}

const observerGameBoard = new MutationObserver(() => resetGlobalStates())
observerGameBoard.observe(gameBoardHTMLElement, {
    attributes: false,
    childList: true,
    characterData: false
})