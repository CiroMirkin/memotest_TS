interface iconPackInterface {
    iconsName: string;
    iconsImage: string;
}

export const showIConPacks = (iconPacks: Array<iconPackInterface>) => {
    const iconPacksFragmentElement = document.createDocumentFragment();
    iconPacks.forEach(iconPack => {
        iconPacksFragmentElement.appendChild(getIconPackElement(iconPack))
    })
    document.getElementById('icon-packs')!.appendChild(iconPacksFragmentElement);
}
const getIconPackElement = (iconPack: iconPackInterface): HTMLElement => {
    const iconPackElement = document.createElement('li');
    iconPackElement.setAttribute('action', 'iconsPack');
    iconPackElement.classList.add('icon-pack');
    iconPackElement.innerHTML = `<div class="icon-pack__img" style="background-image: url(${iconPack.iconsImage});"></div><p class="icon-pack__name">${iconPack.iconsName}</p>`
    return iconPackElement
}

export const changeIconsPackNameAndImageOnScreen = ({ iconsImage, iconsName }: {iconsImage: string, iconsName: string}) => {
    document.getElementById('icon-pack-image')!.style.backgroundImage = `url(${iconsImage})`;
    document.getElementById('icon-pack-name')!.innerText = iconsName.trim();
}