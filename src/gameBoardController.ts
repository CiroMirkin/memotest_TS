
export { }

let count: number = 0;
let firstIndexID: string;

const gameBoardHTMLElement = document.getElementById('game-board')!;
gameBoardHTMLElement.addEventListener('click', async (firstEvent: MouseEvent) => {
    const firstTarget = firstEvent.target as HTMLElement;
    if (firstTarget.parentElement?.classList[1] == 'index--no-selected') {
        count++;
        const indexTarget = firstTarget.parentElement!;
        showIndex(indexTarget);
        if(count == 1) firstIndexID = indexTarget.id;
        if(count == 2) {
            count = 0;
            check(firstIndexID, indexTarget.id)
        }
    
    }

})
const hideTwoIndex = (index1: HTMLElement, index2: HTMLElement): void => {
    index1.classList.add('index--no-selected');
    index2.classList.add('index--no-selected');
}
const showIndex = (index: HTMLElement): void => {
    index.classList.remove('index--no-selected');
}
const selectTwoIndex = (index1: HTMLElement, index2: HTMLElement): void => {
    index1.classList.add('index--selected');
    index2.classList.add('index--selected');
}
const check = (index1ID: string, index2ID: string): true => {
    const index1 = document.getElementById(index1ID)!;
    const index2 = document.getElementById(index2ID)!;
    const firstPairID = index1.getAttribute('pairid') as string;
    const secondPairID = index2.getAttribute('pairid') as string;
    if (firstPairID == secondPairID && index1ID != index2ID) {
        console.info(firstPairID, " == ", secondPairID);
        selectTwoIndex(index1, index2);
    }
    else {
        console.info(firstPairID, " != ", secondPairID);
        setTimeout(() => {
            hideTwoIndex(index2, index1)
        }, 500)
    }
    return true;
}