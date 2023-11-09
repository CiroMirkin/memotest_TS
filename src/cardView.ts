export const hideCard = (card: HTMLElement): void => card.classList.add('card--no-selected');
export const showCard = (card: HTMLElement): void => card.classList.remove('card--no-selected')
export const selectCard = ({ card }: { card: HTMLElement}): void => {
    card.classList.add('card--selected')
    card.classList.add('card--pleyer-two-color');
};
