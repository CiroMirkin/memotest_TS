export interface picture {
    id: string,
    pairID: string,
    src: string
}
  
interface gameBoardView {
    pictures: Array<picture>;
    getIndexElements(): HTMLElement | DocumentFragment;
}
  
class GameBoardView implements gameBoardView {
    pictures: Array<picture>;
    constructor(pictures: Array<picture>) {
      this.pictures = pictures
    }
    private convertPictureToHTMLElement(picture: picture): HTMLElement {
      const pictureElement = document.createElement('li');
      pictureElement.classList.add(...['index', 'index--no-selected']);
      pictureElement.setAttribute('id', picture.id);
      pictureElement.setAttribute('pairID', picture.pairID);
      const pictureInPictureElement = document.createElement('div');
      pictureInPictureElement.classList.add('index__img-container');
      pictureInPictureElement.style.backgroundImage = `url(${picture.src})`;
      pictureElement.appendChild(pictureInPictureElement);
      return pictureElement;
    }
    getIndexElements(): DocumentFragment {
      const pictureListElement = document.createDocumentFragment();
      this.pictures.forEach(picture =>
        pictureListElement.appendChild(this.convertPictureToHTMLElement(picture))
      );
      return pictureListElement;
    }
}

export default GameBoardView;