//Modules
import getGameSettingsData from "./getGameSettingsData";

//Utils
import getCellColumnIndex from "../../utils/getCellColumnIndex";
import getCellIndex from "../../utils/getCellIndex";

//Interface
import { ICell } from "../../interfaces/IRedux";
import { IGameSettings } from "../../interfaces/IGameSettings";

const getFieldMatrixMine = (fieldMatrix: ICell[][], serialNumber: number): ICell | undefined => {
  const { difficulty } = getGameSettingsData() as IGameSettings;
  const mineColumnIndex: number = getCellColumnIndex(serialNumber, difficulty.rowCellsQuantity);
  const mineIndex: number = getCellIndex(serialNumber, difficulty.rowCellsQuantity);

  const fieldMatrixMine = fieldMatrix?.[mineColumnIndex]?.[mineIndex];

  return fieldMatrixMine;
};

export default getFieldMatrixMine;
