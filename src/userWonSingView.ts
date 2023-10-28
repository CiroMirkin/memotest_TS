
const userWonSingElement = document.getElementById('the-user-won-sing')!;

export const showUserWonSing = () => {
    userWonSingElement.classList.replace('user-won-sing--hide', 'user-won-sing--show')
}
export const hideUserWonSing = () => {
    userWonSingElement.classList.replace('user-won-sing--show', 'user-won-sing--hide')
}