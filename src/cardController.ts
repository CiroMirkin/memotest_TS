import { hideCard, selectCard, showCard } from "./cardView";
import { showUserWonSing } from "./userWonSingView";

export { }

let playCount: 0 | 1 | 2 = 0;
let firstCardID: string;

let cardCounterToWin: number = 0;
const incrementCardCounterToWin = () => cardCounterToWin++;

export const resetCardControllesGlobalStates = (): void => {
    playCount = 0;
    firstCardID = '';
    cardCounterToWin = 0;
}

const isAnCard = (target: HTMLElement) => target.parentElement?.classList[1] == 'card--no-selected' ? true : false;

const gameBoardHTMLElement = document.getElementById('game-board')!;
gameBoardHTMLElement.addEventListener('click', async (firstEvent: MouseEvent) => {
    const target = firstEvent.target as HTMLElement;
    if (isAnCard(target)) {
        playCount++;
        if(playCount === 1) {
            const cardTarget = target.parentElement!;
            firstCardID = cardTarget.id;
            showCard(cardTarget);
        }
        if(playCount === 2) {
            const cardTarget = target.parentElement!;
            showCard(cardTarget);
            checkPlay(firstCardID, cardTarget.id)
        }
    }
})

const checkPlay = (card1ID: string, card2ID: string): void => {
    const card1 = document.getElementById(card1ID)!;
    const card2 = document.getElementById(card2ID)!;
    const firstPairID = card1.getAttribute('pairid') as string;
    const secondPairID = card2.getAttribute('pairid') as string;
    if (firstPairID === secondPairID && card1ID !== card2ID) {

        incrementCardCounterToWin();
        const amountOfCardes = 8;
        if(cardCounterToWin == amountOfCardes) showUserWonSing()

        setTimeout(() => {
            selectCard({card: card1 });
            selectCard({card: card2});
            playCount = 0;
        }, 280)
    }
    else {
        setTimeout(() => {
            hideCard(card1);
            hideCard(card2);
            playCount = 0;
        }, 280)
    }
}
