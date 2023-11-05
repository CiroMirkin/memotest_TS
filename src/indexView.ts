export const hideIndex = (index: HTMLElement): void => index.classList.add('index--no-selected');
export const showIndex = (index: HTMLElement): void => index.classList.remove('index--no-selected')
export const selectIndex = ({ index }: { index: HTMLElement}): void => {
    index.classList.add('index--selected')
    index.classList.add('index--pleyer-two-color');
};
