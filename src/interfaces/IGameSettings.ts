//Interfaces
import { ICell } from "./IRedux";

interface IEasyLvl {
  rowCellsQuantity: 10;
  columnCellsQuantity: 10;
  minesQuantity: 10;
  lvlValue: "easy-lvl";
  lvlName: "Beginner";
}

interface IMediumLvl {
  rowCellsQuantity: 15;
  columnCellsQuantity: 15;
  minesQuantity: 35;
  lvlValue: "medium-lvl";
  lvlName: "Intermediate";
}

interface IHardLvl {
  rowCellsQuantity: 25;
  columnCellsQuantity: 25;
  minesQuantity: 99;
  lvlValue: "hard-lvl";
  lvlName: "Expert";
}

interface ICustomLvl {
  rowCellsQuantity: number;
  columnCellsQuantity: number;
  minesQuantity: number;
  lvlValue: "custom-lvl";
  lvlName: "Custom";
}

type TDifficultyLvl = IEasyLvl | IMediumLvl | IHardLvl | ICustomLvl;

interface IGameInfo {
  timeCounter: string;
  movesCounter: number;
  flagsCounter: number;
}

interface ISavedGame {
  id: number;
  name: string;
  state: ICell[][];
  mineFieldMatrix: ICell[][];
  gameDifficulty: TDifficultyLvl;
  gameInfo: IGameInfo;
}

interface IGameSettings {
  difficulty: TDifficultyLvl;
  savedProgress: (ISavedGame | null)[];
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
  IGameInfo,
};
