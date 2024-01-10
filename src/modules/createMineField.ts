//Modules
import getGameSettingsData from "./common/getGameSettingsData";
import setMineFieldGridStyle from "./setMineFieldGridStyle";

//Interfaces
import { IGameSettings } from "../interfaces/IGameSettings";

//Components
import Cell from "../components/Cell";

//Utils
import getMineFieldHTMLNode from "../utils/getMineFieldHTMLNode";

const createMineField = () => {
  const gameSettingsData: IGameSettings = getGameSettingsData() as IGameSettings;
  const { columnCellsQuantity, rowCellsQuantity } = gameSettingsData.difficulty;
  const totalCells = columnCellsQuantity * rowCellsQuantity;
  const mineField: HTMLDivElement = getMineFieldHTMLNode();

  for (let i = 0; i < totalCells; i++) {
    mineField.innerHTML += Cell(i);
  }

  setMineFieldGridStyle(rowCellsQuantity, columnCellsQuantity);
};

export default createMineField;
