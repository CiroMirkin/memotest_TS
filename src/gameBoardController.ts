import { renderGameBoard } from './gameBoardView';
import { icon } from './iconInterface';
import { GameState, createInitialState } from './gameState';

let currentGameState: GameState | null = null;

export const getGameState = (): GameState | null => currentGameState;

export const showGameBoard = (icons: icon[]): GameState => {
    currentGameState = createInitialState(icons);
    
    const cardElements = renderGameBoard(currentGameState);
    const gameBoardElement = document.getElementById('game-board')!;
    gameBoardElement.innerHTML = '';
    gameBoardElement.appendChild(cardElements);
    
    return currentGameState;
};

export const updateGameState = (newState: GameState): void => {
    currentGameState = newState;
    const gameBoardElement = document.getElementById('game-board')!;
    gameBoardElement.innerHTML = '';
    gameBoardElement.appendChild(renderGameBoard(currentGameState));
};
