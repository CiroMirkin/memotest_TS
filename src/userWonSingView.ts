
const userWonSingElement = document.getElementById('the-user-won-sing')!;

export const showUserWonSing = (winningColor?: string) => {
    winningColor  = winningColor || "";
    if(!!winningColor) {
        userWonSingElement.classList.remove("user-won-sing--red");
        userWonSingElement.classList.remove("user-won-sing--blue");
        userWonSingElement.classList.add(`user-won-sing--${winningColor}`)
    }
    userWonSingElement.classList.replace('user-won-sing--hide', 'user-won-sing--show')
}
export const hideUserWonSing = () => {
    userWonSingElement.classList.replace('user-won-sing--show', 'user-won-sing--hide')
}