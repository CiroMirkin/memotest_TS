export interface picture {
    id: string,
    pairID: string,
    src: string
}
  
interface gameBoardView {
    pictures: Array<picture>;
    getHTMLPictureList(): HTMLElement | DocumentFragment;
}
  
class GameBoardView implements gameBoardView {
    pictures: Array<picture>;
    constructor(pictures: Array<picture>) {
      this.pictures = pictures
    }
    private convertPictureToHTMLElement(picture: picture): HTMLElement {
      // <li class="index index--no-selected" pairID=""><img class="index__img" src="./public/pic (2).png" alt=""></li>
      const pictureElement = document.createElement('li');
      pictureElement.classList.add(...['index', 'index--no-selected']);
      pictureElement.setAttribute('id', picture.id);
      pictureElement.setAttribute('pairID', picture.pairID);
      pictureElement.innerHTML = `<img class="index__img" src="${picture.src}" alt="">`;
      return pictureElement;
    }
    getHTMLPictureList(): DocumentFragment {
      const pictureListElement = document.createDocumentFragment();;
      this.pictures.forEach(picture =>
        pictureListElement.appendChild(this.convertPictureToHTMLElement(picture))
      );
      return pictureListElement;
    }
}

export default GameBoardView;