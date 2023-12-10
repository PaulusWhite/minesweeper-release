// Modules
import getGameSettingsData from "./getGameSettingsData";
import getFieldMatrixMine from "./getFieldMatrixMine";
// Interfaces
import IGameSettings from "../interfaces/IGameSettings";
import { ICell } from "../interfaces/IRedux";

const getMinedCellsList = (minesQuantity: number, totalCellsQuantity: number): number[] => {
  const minedCellsList: number[] = [] as number[];

  while (minedCellsList.length < minesQuantity) {
    const minValue = 0;
    const maxValue = totalCellsQuantity;

    const serialNumber = Math.floor(Math.random() * (maxValue - minValue) + minValue);

    if (minedCellsList.indexOf(serialNumber) === -1) minedCellsList.push(serialNumber);
  }

  return minedCellsList;
};

const setCellsNextMinesQuantity = (fieldMatrix: ICell[][]) => {
  const { rowCellsQuantity } = getGameSettingsData() as IGameSettings;

  fieldMatrix.forEach((cellsColumn: ICell[]) => {
    cellsColumn.forEach((cell: ICell) => {
      if (cell.isMined) {
        for (let i = -1; i <= 1; i++) {
          const topNextCell = getFieldMatrixMine(fieldMatrix, cell.serialNumber - rowCellsQuantity + i);
          const bottomNextCell = getFieldMatrixMine(fieldMatrix, cell.serialNumber + rowCellsQuantity + i);

          topNextCell && (topNextCell.minesAround += 1);
          bottomNextCell && (bottomNextCell.minesAround += 1);
        }

        const leftNextCell = getFieldMatrixMine(fieldMatrix, cell.serialNumber - 1);
        const rightNextCell = getFieldMatrixMine(fieldMatrix, cell.serialNumber + 1);

        leftNextCell && (leftNextCell.minesAround += 1);
        rightNextCell && (rightNextCell.minesAround += 1);
      }
    });
  });

  return fieldMatrix;
};

const createMinesFieldMatrix = (): ICell[][] => {
  const gameSettingsData: IGameSettings = getGameSettingsData() as IGameSettings;
  const { rowCellsQuantity, columnCellsQuantity, minesQuantity } = gameSettingsData;
  const totalCellsQuantity: number = rowCellsQuantity * columnCellsQuantity;

  const minedCellsList: number[] = getMinedCellsList(minesQuantity, totalCellsQuantity);

  let minesFieldMatrix: ICell[][] = [] as ICell[][];

  for (let i = 0; i < columnCellsQuantity; i++) {
    const columnArr: ICell[] = [];
    const firstRowCellIndex = i * rowCellsQuantity;
    const lastRowCellIndex = firstRowCellIndex + rowCellsQuantity;

    for (let x = firstRowCellIndex; x < lastRowCellIndex; x++) {
      const serialNumber = x;
      const isMined = minedCellsList.indexOf(serialNumber) !== -1 ? true : false;
      const cellObj: ICell = {
        isMined,
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
