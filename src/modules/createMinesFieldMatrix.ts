// Modules
import getGameSettingsData from "./getGameSettingsData";
import getFieldMatrixMine from "./getFieldMatrixMine";
// Interfaces
import IGameSettings from "../interfaces/IGameSettings";
import IMinedCelslListData from "../interfaces/ICreateMinesFieldMatrix";
import { ICell } from "../interfaces/IRedux";

const getMinedCellsList = (minedCellsListData: IMinedCelslListData): number[] => {
  const minedCellsList: number[] = [] as number[];

  while (minedCellsList.length < minedCellsListData.minesQuantity) {
    const minValue: number = 0;
    const maxValue: number = minedCellsListData.totalCellsQuantity;

    const serialNumber: number = Math.floor(Math.random() * (maxValue - minValue) + minValue);

    if (serialNumber === minedCellsListData.firstClickCellIndex) continue;
    if (minedCellsList.indexOf(serialNumber) === -1) minedCellsList.push(serialNumber);
  }

  return minedCellsList;
};

const isNextCellValid = (nextCellsColumn: ICell[] | undefined, nextCell: ICell | undefined): boolean => {
  if (!nextCell || !nextCellsColumn) return false;

  const isNextCellValid: boolean = nextCellsColumn.some((cell: ICell) => cell.serialNumber === nextCell.serialNumber);

  return isNextCellValid;
};

const setCellsNextMinesQuantity = (fieldMatrix: ICell[][]) => {
  const { rowCellsQuantity } = getGameSettingsData() as IGameSettings;

  fieldMatrix.forEach((cellsColumn: ICell[], cellsColumnIndex: number) => {
    cellsColumn.forEach((cell: ICell) => {
      if (!cell.isMined) return;

      for (let i = -1; i <= 1; i++) {
        const topNextCell: ICell | undefined = getFieldMatrixMine(fieldMatrix, cell.serialNumber - rowCellsQuantity + i);
        const bottomNextCell: ICell | undefined = getFieldMatrixMine(fieldMatrix, cell.serialNumber + rowCellsQuantity + i);
        const prevCellsColumn: ICell[] = fieldMatrix[cellsColumnIndex - 1];
        const nextCellsColumn: ICell[] = fieldMatrix[cellsColumnIndex + 1];

        if (topNextCell && isNextCellValid(prevCellsColumn, topNextCell)) {
          topNextCell.minesAround += 1;
        }

        if (bottomNextCell && isNextCellValid(nextCellsColumn, bottomNextCell)) {
          bottomNextCell.minesAround += 1;
        }
      }

      const leftNextCell: ICell | undefined = getFieldMatrixMine(fieldMatrix, cell.serialNumber - 1);
      const rightNextCell: ICell | undefined = getFieldMatrixMine(fieldMatrix, cell.serialNumber + 1);
      const currentCellsColumn: ICell[] = fieldMatrix[cellsColumnIndex];

      if (leftNextCell && isNextCellValid(currentCellsColumn, leftNextCell)) {
        leftNextCell.minesAround += 1;
      }

      if (rightNextCell && isNextCellValid(currentCellsColumn, rightNextCell)) {
        rightNextCell.minesAround += 1;
      }
    });
  });

  return fieldMatrix;
};

const createMinesFieldMatrix = (firstClickCellIndex: number): ICell[][] => {
  const gameSettingsData: IGameSettings = getGameSettingsData() as IGameSettings;
  const { rowCellsQuantity, columnCellsQuantity, minesQuantity } = gameSettingsData;
  const totalCellsQuantity: number = rowCellsQuantity * columnCellsQuantity;

  const minedCellsList: number[] = getMinedCellsList({ minesQuantity, totalCellsQuantity, firstClickCellIndex });

  let minesFieldMatrix: ICell[][] = [] as ICell[][];

  for (let i = 0; i < columnCellsQuantity; i++) {
    const columnArr: ICell[] = [];
    const firstRowCellIndex: number = i * rowCellsQuantity;
    const lastRowCellIndex: number = firstRowCellIndex + rowCellsQuantity;

    for (let x = firstRowCellIndex; x < lastRowCellIndex; x++) {
      const serialNumber = x;
      const isMined = minedCellsList.indexOf(serialNumber) !== -1 ? true : false;
      const cellObj: ICell = {
        isMined,
        isOpened: false,
        isFlag: false,
        minesAround: 0,
        serialNumber,
      };

      columnArr.push(cellObj);
    }

    minesFieldMatrix.push(columnArr);
  }

  minesFieldMatrix = setCellsNextMinesQuantity(minesFieldMatrix);

  return minesFieldMatrix;
};

export default createMinesFieldMatrix;
