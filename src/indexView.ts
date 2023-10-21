import { players } from "./indexController";

export const hideIndex = (index: HTMLElement): void => index.classList.add('index--no-selected');
export const showIndex = (index: HTMLElement): void => index.classList.remove('index--no-selected')
export const selectIndex = ({ index, player }: { index: HTMLElement, player: players}): void => {
    index.classList.add('index--selected')
    if(player == 'blue') index.classList.add('index--pleyer-two-color');
    else if (player == 'red') index.classList.add('index--pleyer-one-color');
};

const colorSignalForPlayer = document.getElementById("player-color")!;
export const changeColorSignalForPlayer = () => {
    if(colorSignalForPlayer.classList[1] == 'play-color--blue') {
        colorSignalForPlayer.classList.remove('play-color--blue');
        colorSignalForPlayer.classList.add('play-color--red');
    }
     else {
        colorSignalForPlayer.classList.remove('play-color--red');
        colorSignalForPlayer.classList.add('play-color--blue');
    }
}
export const showColorSignalForPlayer = (player: players) => {
    colorSignalForPlayer.classList.remove('play-color--hide');
    colorSignalForPlayer.classList.add(`play-color--${player}`);
}
export const hideColorSignalForPlayer = (player: players) => {
    colorSignalForPlayer.classList.add('play-color--hide');
    colorSignalForPlayer.classList.remove(`play-color--${player}`);
}