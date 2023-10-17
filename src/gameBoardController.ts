
export { }

type players = 'red' | 'blue';
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
    const playerColorIDElement = document.getElementById("player-color")!;
    if(amountOfPlayers == 1) {
        amountOfPlayers = 2;
        playerColorIDElement.classList.remove('play-color--hide');
        playerColorIDElement.classList.add(`play-color--${whoPlayerIsPlaying()}`)

    } 
    else {
        amountOfPlayers = 1;
        playerColorIDElement.classList.add('play-color--hide');
    }
};

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
const selectIndex = ({ index, player }: { index: HTMLElement, player: players}): void => {
    index.classList.add('index--selected')
    if(player == 'blue') index.classList.add('index--pleyer-two-color');
    else if (player == 'red') index.classList.add('index--pleyer-one-color');
};

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
            const playerColorIDElement = document.getElementById("player-color")!;
            if(playerColorIDElement.classList[1] == 'play-color--blue') {
                playerColorIDElement.classList.remove('play-color--blue');
                playerColorIDElement.classList.add('play-color--red');
            }
            else {
                playerColorIDElement.classList.remove('play-color--red');
                playerColorIDElement.classList.add('play-color--blue');
            }
        }, 500)
    }
}