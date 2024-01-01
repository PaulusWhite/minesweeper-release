// Modules
import getGameSettingsData from "./common/getGameSettingsData";
import setMineFieldGridStyle from "./setMineFieldGridStyle";
// Interfaces
import IGameSettings from "../interfaces/IGameSettings";
// Components
import Cell from "../components/Cell";

const createMineField = () => {
  const gameSettingsData = getGameSettingsData() as IGameSettings;
  const { rowCellsQuantity, columnCellsQuantity } = gameSettingsData;
  const totalCells = gameSettingsData.columnCellsQuantity * gameSettingsData.rowCellsQuantity;
  const mineField: HTMLDivElement = document.querySelector(".field") as HTMLDivElement;

  for (let i = 0; i < totalCells; i++) {
    mineField.innerHTML += Cell(i);
  }

  setMineFieldGridStyle(rowCellsQuantity, columnCellsQuantity);
};

export default createMineField;
