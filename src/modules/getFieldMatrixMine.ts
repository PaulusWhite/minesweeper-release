// Modules
import getGameSettingsData from "./getGameSettingsData";

// Interface
import { ICell } from "../interfaces/IRedux";
import IGameSettings from "../interfaces/IGameSettings";

const getFieldMatrixMine = (fieldMatrix: ICell[][], serialNumber: number): ICell | undefined => {
  const { rowCellsQuantity } = getGameSettingsData() as IGameSettings;
  const mineColumnIndex = Math.floor(serialNumber / rowCellsQuantity);
  const mineIndex = serialNumber % rowCellsQuantity;

  const fieldMatrixMine = fieldMatrix?.[mineColumnIndex]?.[mineIndex];

  return fieldMatrixMine;
};

export default getFieldMatrixMine;
