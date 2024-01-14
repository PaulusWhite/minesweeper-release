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
  lvlValue: "custom-lvl";
}

interface ISavedGame {
  id: number;
  name: string | null;
}

interface IGameSettings {
  theme: "default" | "construction" | "nature" | "weather" | "sea";
  difficulty: IEasyLvl | IMediumLvl | IHardLvl | ICustomLvl;
  savedProgress: ISavedGame[];
}

interface IDifficultySettingsData {
  "easy-lvl": IEasyLvl;
  "medium-lvl": IMediumLvl;
  "hard-lvl": IHardLvl;
}

interface ICustomDifficultyInputs {
  widthCellsInput: HTMLInputElement;
  heightCellsInput: HTMLInputElement;
  minesInput: HTMLInputElement;
}

type TDifficultyLvl = IEasyLvl | IMediumLvl | IHardLvl | ICustomLvl;

export {
  IGameSettings,
  IDifficultySettingsData,
  IEasyLvl,
  IMediumLvl,
  IHardLvl,
  TDifficultyLvl,
  ICustomLvl,
  ICustomDifficultyInputs,
  ISavedGame,
};
