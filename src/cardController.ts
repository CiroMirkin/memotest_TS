import { getGameState, updateGameState, showGameBoard } from './gameBoardController';
import { flipCard, checkMatch, hideUnmatchedCards } from './commands/gameCommands';
import { showUserWonSing } from './userWonSingView';

let isProcessing = false;

export const resetCardControllesGlobalStates = (): void => {};

const gameBoardHTMLElement = document.getElementById('game-board')!;

gameBoardHTMLElement.addEventListener('click', (event: MouseEvent) => {
    if (isProcessing) return;
    
    const target = (event.target as HTMLElement).closest('.card') as HTMLElement | null;
    if (!target) return;
    
    const currentState = getGameState();
    if (!currentState) return;
    
    const cardId = target.id;
    const card = currentState.cards.find(c => c.id === cardId);
    if (!card || card.isFlipped || card.isMatched) return;
    
    const newState = flipCard(currentState, cardId);
    updateGameState(newState);
    
    if (newState.flippedCards.length === 2) {
        isProcessing = true;
        
        setTimeout(() => {
            const checkedState = checkMatch(newState);
            
            if (checkedState.matchedPairs > newState.matchedPairs) {
                updateGameState(checkedState);
                if (checkedState.isGameWon) {
                    showUserWonSing();
                }
            } else {
                const hiddenState = hideUnmatchedCards(checkedState);
                updateGameState(hiddenState);
            }
            
            isProcessing = false;
        }, 280);
    }
});

export const initCardController = (icons: unknown[]): void => {
    showGameBoard(icons as any);
};

export const resetGameController = (icons: unknown[]): void => {
    isProcessing = false;
    showGameBoard(icons as any);
};
