export {}

let clickState = false;
let firstPairID: string;
let fisrtIndexClicked: HTMLElement;

const gameBoardHTMLElement = document.getElementById('game-board')!;
gameBoardHTMLElement.addEventListener('click', (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if(clickState) {
        target.parentElement?.classList.remove('index--no-selected');
        const secondPairID = target.parentElement?.getAttribute('pairid') as string;
        if(firstPairID == secondPairID) {
            console.info('iguales');
            target.parentElement?.classList.add('index--selected');
            fisrtIndexClicked?.classList.add('index--selected');
        }
        else {
            setTimeout(() => {
                target.parentElement?.classList.add('index--no-selected');
                fisrtIndexClicked?.classList.add('index--no-selected');
            }, 2500);
        }
        clickState = false;
    }
    else if(target.parentElement?.classList[0] == 'index' && target.parentElement?.classList[1] == 'index--no-selected') {
        target.parentElement?.classList.remove('index--no-selected');
        if(!clickState) {
            firstPairID = target.parentElement?.getAttribute('pairid') as string;
            fisrtIndexClicked = target.parentElement;
        }
        clickState = true;
    }
})
