//store
import store from "../redux/createStore";

//Interfaces
import { ICell } from "../interfaces/IRedux";

const revealAllCells = () => {
  const fieldMatrix: ICell[][] = store.getState().state;
  const mineField: HTMLDivElement = document.querySelector(".field") as HTMLDivElement;

  fieldMatrix.forEach((cellsColumn: ICell[]) => {
    cellsColumn.forEach((cell: ICell) => {
      const fieldCell: HTMLSpanElement = mineField.children[cell.serialNumber] as HTMLSpanElement;

      if (cell.isMined) {
        fieldCell.classList.add("cell__mined");
      } else if (cell.minesAround !== 0 && !cell.isMined) {
        fieldCell.classList.add("cell__indicated");
        fieldCell.innerHTML = `${cell.minesAround}`;
      } else fieldCell.classList.add("cell__open");
    });
  });
};

export default revealAllCells;
