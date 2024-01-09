interface IEasyLvl {
  rowCellsQuantity: 10;
  columnCellsQuantity: 10;
  minesQuantity: 10;
  lvlValue: "easy-lvl";
}

interface IMediumLvl {
  rowCellsQuantity: 15;
  columnCellsQuantity: 15;
  minesQuantity: 35;
  lvlValue: "medium-lvl";
}

interface IHardLvl {
  rowCellsQuantity: 25;
  columnCellsQuantity: 25;
  minesQuantity: 99;
  lvlValue: "hard-lvl";
}

interface ICustomLvl {
  rowCellsQuantity: number;
  columnCellsQuantity: number;
  minesQuantity: number;
  lvlValue: "custom";
}

interface IGameSettings {
  iconsStyle: "default" | "construction" | "nature" | "weather" | "sea";
  difficulty: IEasyLvl | IMediumLvl | IHardLvl | ICustomLvl;
}

export default IGameSettings;
