import { hideIndex, selectIndex, showIndex } from "./indexView";
import { showUserWonSing } from "./userWonSingView";

export { }

let playCount: 0 | 1 | 2 = 0;
let firstIndexID: string;

let indexCounterToWin: number = 0;
const incrementIndexCounterToWin = () => indexCounterToWin++;

export const resetIndexControllesGlobalStates = (): void => {
    playCount = 0;
    firstIndexID = '';
    indexCounterToWin = 0;
}

const isAnIndex = (target: HTMLElement) => target.parentElement?.classList[1] == 'index--no-selected' ? true : false;

const gameBoardHTMLElement = document.getElementById('game-board')!;
gameBoardHTMLElement.addEventListener('click', async (firstEvent: MouseEvent) => {
    const target = firstEvent.target as HTMLElement;
    if (isAnIndex(target)) {
        playCount++;
        if(playCount === 1) {
            const indexTarget = target.parentElement!;
            firstIndexID = indexTarget.id;
            showIndex(indexTarget);
        }
        if(playCount === 2) {
            const indexTarget = target.parentElement!;
            showIndex(indexTarget);
            checkPlay(firstIndexID, indexTarget.id)
        }
    }
})

const checkPlay = (index1ID: string, index2ID: string): void => {
    const index1 = document.getElementById(index1ID)!;
    const index2 = document.getElementById(index2ID)!;
    const firstPairID = index1.getAttribute('pairid') as string;
    const secondPairID = index2.getAttribute('pairid') as string;
    if (firstPairID === secondPairID && index1ID !== index2ID) {

        incrementIndexCounterToWin();
        const amountOfIndexes = 8;
        if(indexCounterToWin == amountOfIndexes) showUserWonSing()

        setTimeout(() => {
            selectIndex({index: index1 });
            selectIndex({index: index2});
            playCount = 0;
        }, 280)
    }
    else {
        console.log('ere')
        console.log(index1, index2)
        console.log(playCount)
        setTimeout(() => {
            hideIndex(index1);
            hideIndex(index2);
            playCount = 0;
        }, 280)
    }
}
