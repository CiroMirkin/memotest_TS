export interface picture {
    id: string,
    pairID: string,
    src: string
}
  
interface gameBoardView {
    pictures: Array<picture>;
    getCardElements(): HTMLElement | DocumentFragment;
}
  
class GameBoardView implements gameBoardView {
    pictures: Array<picture>;
    constructor(pictures: Array<picture>) {
      this.pictures = pictures
    }
    private convertPictureToHTMLElement(picture: picture): HTMLElement {
      const pictureElement = document.createElement('li');
      pictureElement.classList.add(...['card', 'card--no-selected']);
      pictureElement.setAttribute('id', picture.id);
      pictureElement.setAttribute('pairid', picture.pairID);
      const pictureInPictureElement = document.createElement('div');
      pictureInPictureElement.classList.add('card__img-container');
      pictureInPictureElement.style.backgroundImage = `url(${picture.src})`;
      pictureElement.appendChild(pictureInPictureElement);
      return pictureElement;
    }
    getCardElements(): DocumentFragment {
      const pictureListElement = document.createDocumentFragment();
      this.pictures.forEach(picture =>
        pictureListElement.appendChild(this.convertPictureToHTMLElement(picture))
      );
      return pictureListElement;
    }
}

export default GameBoardView;