
export { }

let count: 0 | 1 | 2 = 0;
let firstIndexID: string;

export const resetGameBoardController = ():void => {
    count = 0;
    firstIndexID = '';
}

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

const isAnIndex = (target: HTMLElement) => target.parentElement?.classList[1] == 'index--no-selected' ? true : false;

const hideIndex = (index: HTMLElement): void => index.classList.add('index--no-selected');
const showIndex = (index: HTMLElement): void => index.classList.remove('index--no-selected')
const selectIndex = (index: HTMLElement): void => index.classList.add('index--selected');

const check = (index1ID: string, index2ID: string): void => {
    const index1 = document.getElementById(index1ID)!;
    const index2 = document.getElementById(index2ID)!;
    const firstPairID = index1.getAttribute('pairid') as string;
    const secondPairID = index2.getAttribute('pairid') as string;
    if (firstPairID == secondPairID && index1ID != index2ID) {
        console.info(firstPairID, " == ", secondPairID);
        selectIndex(index1);
        selectIndex(index2);
    }
    else {
        console.info(firstPairID, " != ", secondPairID);
        setTimeout(() => {
            hideIndex(index1);
            hideIndex(index2);
        }, 500)
    }
}