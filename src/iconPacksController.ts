import { changeIconsPackNameAndImageOnScreen } from "./iconPacksView";
import { getIConsPackByName, getIconsByName, resetGameBoard } from "./main";

const iconPacksElement =  document.getElementById('icon-packs')!;
iconPacksElement.addEventListener('click', e => {
    const target = e.target as HTMLElement;
    const iconPackName = getIconPackName(target);
    resetGameBoard(getIconsByName(iconPackName));
    changeIconsPackNameAndImageOnScreen(getIConsPackByName(iconPackName))
})

const getIconPackName = (target: HTMLElement): string => {
    if(target.id == "icon-packs") {
        return target.childNodes.item(1).textContent || '';
    }
    return target.parentElement?.childNodes.item(1).textContent || '';
}