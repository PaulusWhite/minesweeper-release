//store
import store from "../redux/createStore";

//actions
import createMineFieldMatrixAction from "../redux/actions,";

// modules
import createMineFieldMatrix from "./createMineFieldMatrix";
import getGameSettingsData from "./common/getGameSettingsData";
import revealFreeCells from "./revealFreeCells";
import getFieldMatrixMine from "./common/getFieldMatrixMine";
import revealAllCells from "./revealAllCells";
import checkIsPlayWon from "./checkIsPlayWon";
import setCellFlag from "./setCellFlag";
import setMovesCounterValue from "./setMovesCounterValue";

//Interfaces
import IGameSettings from "../interfaces/IGameSettings";
import { ICell } from "../interfaces/IRedux";

//Utils
import getMineFieldHTMLNode from "../utils/getMineFieldHTMLNode";

const clickCell = (field: HTMLDivElement, clickedCellIndex: number) => {
  const clickedCell: HTMLSpanElement = field.children[clickedCellIndex] as HTMLSpanElement;
  const { rowCellsQuantity } = getGameSettingsData() as IGameSettings;

  if (clickedCell.classList.contains("cell__open") || clickedCell.classList.contains("cell__indicated")) return;

  clickedCell.classList.add("cell__open");

  const fieldMatrix: ICell[][] = store.getState().state;
  const matrixCellData: ICell = getFieldMatrixMine(fieldMatrix, clickedCellIndex) as ICell;

  setMovesCounterValue();

  if (matrixCellData.isMined) {
    revealAllCells("cell__mined");
    return;
  }

  revealFreeCells(matrixCellData, fieldMatrix, rowCellsQuantity);
  checkIsPlayWon();
};

const setGameAction = () => {
  const mineField: HTMLDivElement = getMineFieldHTMLNode();
  let isFirstCellClick: boolean = true; // indicator for creating mines matrix after first click

  mineField.addEventListener("click", (Event: Event) => {
    const target: HTMLElement = Event.target as HTMLElement;

    if (target.closest(".cell")) {
      if (target.classList.contains("cell__flagged")) return;

      const clickedCellIndex: number = +(target.dataset.cellIndex as string);

      if (isFirstCellClick) {
        isFirstCellClick = !isFirstCellClick;

        const mineFieldMatrix: ICell[][] = createMineFieldMatrix(clickedCellIndex);
        store.dispatch(createMineFieldMatrixAction(mineFieldMatrix));
      }

      clickCell(mineField, clickedCellIndex);
    }
  });

  mineField.addEventListener("contextmenu", (Event) => {
    Event.preventDefault();

    const target: HTMLElement = Event.target as HTMLElement;

    if (target.closest(".cell")) {
      if (target.classList.contains("cell__open") || target.classList.contains("cell__indicated")) return;

      const clickedCellIndex: number = +(target.dataset.cellIndex as string);
      setCellFlag(mineField, clickedCellIndex);
    }
  });
};

export default setGameAction;
