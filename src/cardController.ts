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

const gameBoardHTMLElement = document.getElementById('game-board')!;
gameBoardHTMLElement.addEventListener('click', (event: MouseEvent) => {
    const target = (event.target as HTMLElement).closest('.card') as HTMLElement | null;
    if (!target || !target.classList.contains('card--no-selected')) return;
    
    playCount++;
    if(playCount === 1) {
        firstCardID = target.id;
        showCard(target);
    }
    if(playCount === 2) {
        const cardTarget = target;
        showCard(cardTarget);
        checkPlay(firstCardID, cardTarget.id)
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
