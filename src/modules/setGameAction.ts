//store
import store from "../redux/createStore";

//actions
import createMinesFieldMatrixAction from "../redux/actions,";

// modules
import createMinesFieldMatrix from "./createMinesFieldMatrix";
import getGameSettingsData from "./common/getGameSettingsData";
import revealFreeCells from "./revealFreeCells";
import getFieldMatrixMine from "./common/getFieldMatrixMine";

//Interfaces
import IGameSettings from "../interfaces/IGameSettings";
import { ICell } from "../interfaces/IRedux";

const clickCell = (field: HTMLDivElement, clickedCellIndex: number) => {
  const clickedCell: HTMLSpanElement = field.children[clickedCellIndex] as HTMLSpanElement;
  const { rowCellsQuantity } = getGameSettingsData() as IGameSettings;

  if (clickedCell.classList.contains("cell__open") || clickedCell.classList.contains("cell__indicated")) return;

  clickedCell.classList.add("cell__open");

  const fieldMatrix: ICell[][] = store.getState().state;
  const matrixCellData: ICell = getFieldMatrixMine(fieldMatrix, clickedCellIndex) as ICell;

  revealFreeCells(matrixCellData, fieldMatrix, rowCellsQuantity);
};

const setGameAction = () => {
  const field: HTMLDivElement = document.querySelector(".field") as HTMLDivElement;
  let isFirstCellClick: boolean = true; // indicator for creating mines matrix after first click

  field.addEventListener("click", (Event: Event) => {
    const target: HTMLElement = Event.target as HTMLElement;

    if (target.closest(".cell")) {
      const clickedCellIndex: number = +(target.dataset.cellIndex as string);

      if (isFirstCellClick) {
        isFirstCellClick = !isFirstCellClick;

        const minesFieldMatrix = createMinesFieldMatrix(clickedCellIndex);
        store.dispatch(createMinesFieldMatrixAction(minesFieldMatrix));
      }

      clickCell(field, clickedCellIndex);
    }
  });
};

export default setGameAction;
