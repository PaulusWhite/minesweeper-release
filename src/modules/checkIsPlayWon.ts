//Utils
import getMineFieldHTMLNode from "../utils/getMineFieldHTMLNode";

//Interfaces
import {IGameSettings} from "../interfaces/IGameSettings";

//Modules
import getGameSettingsData from "./common/getGameSettingsData";
import revealAllCells from "./revealAllCells";

const showWinMessage = () => {
  alert("you are won!");
};

const checkIsPlayWon = () => {
  const mineField: HTMLDivElement = getMineFieldHTMLNode();
  const { difficulty } = getGameSettingsData() as IGameSettings;
  let remainedCellsQuantity: number = 0;

  [].forEach.call(mineField.children, (fieldCell) => {
    const cell: HTMLSpanElement = fieldCell as HTMLSpanElement;

    // if the cell is not revealed then it has only 1 class - .cell
    if (cell.classList.length === 1) remainedCellsQuantity++;
  });

  if (remainedCellsQuantity === difficulty.minesQuantity) {
    revealAllCells("cell__mined-revealed");
    showWinMessage();
  }
};

export default checkIsPlayWon;
