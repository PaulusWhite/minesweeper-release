interface IGameSettings {
  rowCellsQuantity: number;
  columnCellsQuantity: number;
  minesQuantity: number;
  iconsStyle: "default" | "construction" | "nature" | "weather" | "sea";
}

export default IGameSettings;
