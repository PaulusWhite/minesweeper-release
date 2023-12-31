// Modules
import getGameSettingsData from "./getGameSettingsData";

// Utils
import getCellColumnIndex from "../utils/getCellColumnIndex";
import getCellIndex from "../utils/getCellIndex";

// Interface
import { ICell } from "../interfaces/IRedux";
import IGameSettings from "../interfaces/IGameSettings";

const getFieldMatrixMine = (fieldMatrix: ICell[][], serialNumber: number): ICell | undefined => {
  const { rowCellsQuantity } = getGameSettingsData() as IGameSettings;
  const mineColumnIndex: number = getCellColumnIndex(serialNumber, rowCellsQuantity);
  const mineIndex: number = getCellIndex(serialNumber, rowCellsQuantity);

  const fieldMatrixMine = fieldMatrix?.[mineColumnIndex]?.[mineIndex];

  return fieldMatrixMine;
};

export default getFieldMatrixMine;
