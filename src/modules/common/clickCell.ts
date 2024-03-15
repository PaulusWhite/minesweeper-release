//store
import store from "../../redux/createStore";

//Modules
import getGameSettingsData from "./getGameSettingsData";
import getFieldMatrixMine from "./getFieldMatrixMine";
import setMovesCounterValue from "../setMovesCounterValue";
import revealAllCells from "../revealAllCells";
import stopGameTimer from "./stopGameTimer";
import setEmoji from "./setEmoji";
import revealFreeCells from "../revealFreeCells";
import checkIsPlayWon from "../checkIsPlayWon";

//Interfaces
import { IGameSettings } from "../../interfaces/IGameSettings";
import { ICell } from "../../interfaces/IRedux";

const clickCell = (field: HTMLDivElement, clickedCellIndex: number) => {
  const clickedCell: HTMLSpanElement = field.children[clickedCellIndex] as HTMLSpanElement;
  const { difficulty } = getGameSettingsData() as IGameSettings;

  if (clickedCell.classList.contains("cell__open") || clickedCell.classList.contains("cell__indicated")) return;

  clickedCell.classList.add("cell__open");

  const fieldMatrix: ICell[][] = store.getState().state;
  const matrixCellData: ICell = getFieldMatrixMine(fieldMatrix, clickedCellIndex) as ICell;

  setMovesCounterValue();

  if (matrixCellData.isMined) {
    revealAllCells("cell__mined");
    stopGameTimer();
    setEmoji("lose");
    return;
  }

  revealFreeCells(matrixCellData, fieldMatrix, difficulty.rowCellsQuantity);
  checkIsPlayWon();

  //   // FOR TEST
  //   revealAllCells("cell__mined-revealed");
  // alert("You won! Congratulations! You can save this result like the progress or just start a new game!");
  //     stopGameTimer();
  //     setEmoji("win");
  //     saveWinResult();
};

export default clickCell;
