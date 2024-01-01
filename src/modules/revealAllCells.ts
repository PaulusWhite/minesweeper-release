//store
import store from "../redux/createStore";

//Interfaces
import { ICell } from "../interfaces/IRedux";

//Utils
import getMineFieldHTMLNode from "../utils/getMineFieldHTMLNode";

const revealAllCells = (minedCellStyle: "cell__mined" | "cell__mined-revealed") => {
  const fieldMatrix: ICell[][] = store.getState().state;
  const mineField: HTMLDivElement = getMineFieldHTMLNode();

  fieldMatrix.forEach((cellsColumn: ICell[]) => {
    cellsColumn.forEach((cell: ICell) => {
      const fieldCell: HTMLSpanElement = mineField.children[cell.serialNumber] as HTMLSpanElement;

      if (cell.isMined) {
        fieldCell.classList.add(minedCellStyle);
      } else if (cell.minesAround !== 0 && !cell.isMined) {
        fieldCell.classList.add("cell__indicated");
        fieldCell.innerHTML = `${cell.minesAround}`;
      } else fieldCell.classList.add("cell__open");
    });
  });
};

export default revealAllCells;
