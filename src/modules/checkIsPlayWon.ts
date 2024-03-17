//Utils
import getMineFieldHTMLNode from "../utils/getMineFieldHTMLNode";

//Interfaces
import { IGameSettings } from "../interfaces/IGameSettings";

//Modules
import getGameSettingsData from "./common/getGameSettingsData";
import revealAllCells from "./revealAllCells";
import stopGameTimer from "./common/stopGameTimer";
import setEmoji from "./common/setEmoji";
import saveWinResult from "./saveWinResult";

const showWinMessage = () => {
  alert("You won! Congratulations! Your result was saved");
};

const checkIsPlayWon = () => {
  const mineField: HTMLDivElement = getMineFieldHTMLNode();
  const { difficulty } = getGameSettingsData() as IGameSettings;
  let remainedCellsQuantity: number = 0;

  [].forEach.call(mineField.children, (fieldCell) => {
    const cell: HTMLSpanElement = fieldCell as HTMLSpanElement;

    // if the cell is not revealed then it has only 1 class - .cell
    // if the cell has 2 classes and one of them is cell__flagged
    if (cell.classList.length === 1 || (cell.classList.length === 2 && cell.classList.contains("cell__flagged"))) {
      remainedCellsQuantity++;
    }
  });

  if (remainedCellsQuantity === difficulty.minesQuantity) {
    revealAllCells("cell__mined-revealed");
    showWinMessage();
    stopGameTimer();
    setEmoji("win");
    saveWinResult();
  }
};

export default checkIsPlayWon;
