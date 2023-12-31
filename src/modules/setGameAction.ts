// // store
import store from "../redux/createStore";
// actions
import createMinesFieldMatrixAction from "../redux/actions,";
// modules
import createMinesFieldMatrix from "./createMinesFieldMatrix";
import getFieldMatrixMine from "./getFieldMatrixMine";
// interfaces
import { ICell } from "../interfaces/IRedux";
// import IOpenedCellData from "../interfaces/IOpenedCellData";

const clickCell = (field: HTMLDivElement, clickedCellIndex: number) => {
  const clickedCell: HTMLSpanElement = field.children[clickedCellIndex] as HTMLSpanElement;

  if (clickedCell.classList.contains("cell__open")) return;

  clickedCell.classList.add("cell__open");

  // const openedCellsData: IOpenedCellData[] = [];
  const minesFieldMatrix: ICell[][] = store.getState().state;

  const matrixCellData = getFieldMatrixMine(minesFieldMatrix, clickedCellIndex);
  console.log(matrixCellData);
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
