// Modules
import getGameSettingsData from "./getGameSettingsData";
import setGameSettings from "./setGameSettings";
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

const createMinesFieldMatrix = (): ICell[][] => {
  setGameSettings(); // Initialize game settings

  const gameSettingsData: IGameSettings = getGameSettingsData() as IGameSettings;
  const { rowCellsQuantity, columnCellsQuantity, minesQuantity } = gameSettingsData;
  const totalCellsQuantity: number = rowCellsQuantity * columnCellsQuantity;

  const minedCellsList: number[] = getMinedCellsList(minesQuantity, totalCellsQuantity);

  const minesFieldMatrix: ICell[][] = [] as ICell[][];

  for (let i = 0; i < rowCellsQuantity; i++) {
    const rowArr: ICell[] = [];

    for (let x = 0; x < columnCellsQuantity; x++) {
      const serialNumber = +(`${i}` + x);
      const isMined = minedCellsList.indexOf(serialNumber) !== -1 ? true : false;
      const cellObj: ICell = {
        isMined,
        isFlag: false,
        minesAround: 0,
        serialNumber,
      };

      rowArr.push(cellObj);
    }

    minesFieldMatrix.push(rowArr);
  }

  return minesFieldMatrix;
};

export default createMinesFieldMatrix;
