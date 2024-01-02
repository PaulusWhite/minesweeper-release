//Modules
import getGameSettingsData from "./common/getGameSettingsData";
import getTargetCellAdjacentCells from "./common/getTargetCellAdjacentCells";

//Utils
import getCellColumnIndex from "../utils/getCellColumnIndex";
import getCellIndex from "../utils/getCellIndex";

//Interfaces
import IGameSettings from "../interfaces/IGameSettings";
import IMinedCelslListData from "../interfaces/ICreateMineFieldMatrix";
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

const setCellsNextMinesQuantity = (fieldMatrix: ICell[][]) => {
  const { rowCellsQuantity } = getGameSettingsData() as IGameSettings;

  fieldMatrix.forEach((cellsColumn: ICell[]) => {
    cellsColumn.forEach((cell: ICell) => {
      if (!cell.isMined) return;

      const adjacentCellsArr: ICell[] = getTargetCellAdjacentCells(cell, fieldMatrix, rowCellsQuantity);

      adjacentCellsArr.forEach((adjacentCell: ICell) => {
        const adjacentCellColumnIndex: number = getCellColumnIndex(adjacentCell.serialNumber, rowCellsQuantity);
        const adjacentCellIndex: number = getCellIndex(adjacentCell.serialNumber, rowCellsQuantity);

        fieldMatrix[adjacentCellColumnIndex][adjacentCellIndex].minesAround += 1;
      });
    });
  });

  return fieldMatrix;
};

const createMineFieldMatrix = (firstClickCellIndex: number): ICell[][] => {
  const gameSettingsData: IGameSettings = getGameSettingsData() as IGameSettings;
  const { rowCellsQuantity, columnCellsQuantity, minesQuantity } = gameSettingsData;
  const totalCellsQuantity: number = rowCellsQuantity * columnCellsQuantity;
  const minedCellsList: number[] = getMinedCellsList({ minesQuantity, totalCellsQuantity, firstClickCellIndex });
  let mineFieldMatrix: ICell[][] = [] as ICell[][];

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

    mineFieldMatrix.push(columnArr);
  }

  mineFieldMatrix = setCellsNextMinesQuantity(mineFieldMatrix);

  return mineFieldMatrix;
};

export default createMineFieldMatrix;
