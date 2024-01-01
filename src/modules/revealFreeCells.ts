// Modules
import getTargetCellAdjacentCells from "./common/getTargetCellAdjacentCells";

// Interfaces
import { ICell } from "../interfaces/IRedux";
import IRevealNextCellsData from "../interfaces/IClickActions";

const revealNextCells = (revealNextCellsData: IRevealNextCellsData): Map<number, ICell> => {
  const { cell, fieldMatrix, rowCellsQuantity, prevRevealedNextCellsMap } = revealNextCellsData;
  const revealedNextCellsMap: Map<number, ICell> = prevRevealedNextCellsMap ? prevRevealedNextCellsMap : new Map();

  if (cell.minesAround !== 0) {
    revealedNextCellsMap.set(cell.serialNumber, cell);
  } else {
    cell.isOpened = true;
    revealedNextCellsMap.set(cell.serialNumber, cell);

    const adjacentCells: ICell[] = getTargetCellAdjacentCells(cell, fieldMatrix, rowCellsQuantity);
    const adjacentCellsMap: Map<number, ICell> = new Map();

    adjacentCells.forEach((adjacentCell: ICell) => adjacentCellsMap.set(adjacentCell.serialNumber, adjacentCell));

    for (const serialNumber of revealedNextCellsMap.keys()) adjacentCellsMap.delete(serialNumber);

    for (const adjacentCell of adjacentCellsMap.values()) {
      const newRevealedNextCellsMap: Map<number, ICell> = revealNextCells({
        cell: adjacentCell,
        fieldMatrix,
        rowCellsQuantity,
        prevRevealedNextCellsMap: revealedNextCellsMap,
      });

      newRevealedNextCellsMap.forEach((cellData: ICell, serialNumber: number) => {
        revealedNextCellsMap.set(serialNumber, cellData);
      });
    }
  }

  return revealedNextCellsMap;
};

const revealFreeCells = (cell: ICell, fieldMatrix: ICell[][], rowCellsQuantity: number) => {
  const minesField: HTMLDivElement = document.querySelector(".field") as HTMLDivElement;
  const revealedNextCellsMap: Map<number, ICell> = revealNextCells({ cell, fieldMatrix, rowCellsQuantity });

  revealedNextCellsMap.forEach((cellData: ICell, serialNumber: number) => {
    const fieldCell: HTMLSpanElement = minesField.children[serialNumber] as HTMLSpanElement;

    if (cellData.isOpened) {
      fieldCell.classList.add("cell__open");
      return;
    }

    fieldCell.classList.add("cell__indicated");
    fieldCell.innerHTML = `${cellData.minesAround}`;
  });
};

export default revealFreeCells;