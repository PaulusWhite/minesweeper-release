// Modules
import getGameSettingsData from "./getGameSettingsData";
import setMinesFieldGridStyle from "./setMinesFieldGridStyle";
// Interfaces
import IGameSettings from "../interfaces/IGameSettings";
// Components
import Cell from "../components/Cell";

const createMinesField = () => {
  const gameSettingsData = getGameSettingsData() as IGameSettings;
  const { rowCellsQuantity, columnCellsQuantity } = gameSettingsData;
  const totalCells = gameSettingsData.columnCellsQuantity * gameSettingsData.rowCellsQuantity;
  const field: HTMLDivElement = document.querySelector(".field") as HTMLDivElement;

  for (let i = 0; i < totalCells; i++) {
    field.innerHTML += Cell(i);
  }

  setMinesFieldGridStyle(rowCellsQuantity, columnCellsQuantity);
};

export default createMinesField;
