//Interfaces
import { ICell } from "./IRedux";

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

type TDifficultyLvl = IEasyLvl | IMediumLvl | IHardLvl | ICustomLvl;

interface ISavedGame {
  id: number;
  name: string | null;
  state: ICell[][] | null;
  gameDifficulty: TDifficultyLvl | null;
}

interface IGameSettings {
  theme: "default" | "construction" | "nature" | "weather" | "sea";
  difficulty: TDifficultyLvl;
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
