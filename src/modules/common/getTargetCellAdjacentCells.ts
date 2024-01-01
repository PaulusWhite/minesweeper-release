//Interfaces
import { ICell } from "../../interfaces/IRedux";

// Modules
import getFieldMatrixMine from "./getFieldMatrixMine";

// Utils
import getCellColumnIndex from "../../utils/getCellColumnIndex";

const isNextCellValid = (nextCellsColumn: ICell[] | undefined, nextCell: ICell | undefined): boolean => {
  if (!nextCell || !nextCellsColumn) return false;

  const isNextCellValid: boolean = nextCellsColumn.some((cell: ICell) => cell.serialNumber === nextCell.serialNumber);

  return isNextCellValid;
};

const getTargetCellAdjacentCells = (cell: ICell, fieldMatrix: ICell[][], rowCellsQuantity: number): ICell[] => {
  const adjacentCellsArr: ICell[] = [];
  const cellColumnIndex: number = getCellColumnIndex(cell.serialNumber, rowCellsQuantity);

  for (let i = -1; i <= 1; i++) {
    const topNextCell: ICell | undefined = getFieldMatrixMine(fieldMatrix, cell.serialNumber - rowCellsQuantity + i);
    const bottomNextCell: ICell | undefined = getFieldMatrixMine(fieldMatrix, cell.serialNumber + rowCellsQuantity + i);

    const prevCellsColumn: ICell[] = fieldMatrix[cellColumnIndex - 1];
    const nextCellsColumn: ICell[] = fieldMatrix[cellColumnIndex + 1];

    if (topNextCell && isNextCellValid(prevCellsColumn, topNextCell)) adjacentCellsArr.push(topNextCell);

    if (bottomNextCell && isNextCellValid(nextCellsColumn, bottomNextCell)) adjacentCellsArr.push(bottomNextCell);
  }

  const leftNextCell: ICell | undefined = getFieldMatrixMine(fieldMatrix, cell.serialNumber - 1);
  const rightNextCell: ICell | undefined = getFieldMatrixMine(fieldMatrix, cell.serialNumber + 1);

  const currentCellsColumn: ICell[] = fieldMatrix[cellColumnIndex];

  if (leftNextCell && isNextCellValid(currentCellsColumn, leftNextCell)) adjacentCellsArr.push(leftNextCell);

  if (rightNextCell && isNextCellValid(currentCellsColumn, rightNextCell)) adjacentCellsArr.push(rightNextCell);

  return adjacentCellsArr;
};
export default getTargetCellAdjacentCells;
