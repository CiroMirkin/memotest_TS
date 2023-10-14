import { gameBoardController } from './gameBoardController';
import { icons } from './icons';
import './style.css'
// import typescriptLogo from './typescript.svg'

const iconList = icons;
gameBoardController(iconList);
console.table(iconList);