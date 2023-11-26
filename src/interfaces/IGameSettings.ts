interface IGameSettings {
  rowCells: number;
  columnCells: number;
  minesNumber: number;
  iconsStyle: "default" | "construction" | "nature" | "weather" | "sea";
}

export default IGameSettings;
