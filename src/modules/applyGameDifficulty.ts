//Interfaces
import { IDifficultySettingsData, IEasyLvl, IMediumLvl, IHardLvl, TDifficultyLvl } from "../interfaces/IGameSettings";
import { IGameSettings } from "../interfaces/IGameSettings";

//Modules
import getGameSettingsData from "./common/getGameSettingsData";
import setGameSettingsData from "./setGameSettingsData";

const DIFFICULTY_LEVELS_DATA: IDifficultySettingsData = {
  "easy-lvl": {
    lvlValue: "easy-lvl",
    rowCellsQuantity: 10,
    columnCellsQuantity: 10,
    minesQuantity: 10,
  },
  "medium-lvl": {
    lvlValue: "medium-lvl",
    rowCellsQuantity: 15,
    columnCellsQuantity: 15,
    minesQuantity: 35,
  },
  "hard-lvl": {
    lvlValue: "hard-lvl",
    rowCellsQuantity: 25,
    columnCellsQuantity: 25,
    minesQuantity: 99,
  },
};

const setDifficultySettingsData = (newDifficultyLvl: TDifficultyLvl) => {
  const currentGameSettingsData: IGameSettings = getGameSettingsData() as IGameSettings;
  const { theme } = currentGameSettingsData;

  const newGameSettingsData: IGameSettings = {
    difficulty: newDifficultyLvl,
    theme,
  };

  setGameSettingsData(newGameSettingsData);
};

const applyGameDifficulty = () => {
  const applyBtn: HTMLButtonElement = document.querySelector(".difficulty-settings__apply-btn") as HTMLButtonElement;

  applyBtn.addEventListener("click", () => {
    const lvlInputs: NodeListOf<HTMLInputElement> = document.getElementsByName("difficulty") as NodeListOf<HTMLInputElement>;

    lvlInputs.forEach((lvlInput: HTMLInputElement) => {
      if (lvlInput.checked && lvlInput.id !== "custom-lvl") {
        const inputId: keyof IDifficultySettingsData = lvlInput.id as keyof IDifficultySettingsData;
        const newDifficultyLvl: IEasyLvl | IMediumLvl | IHardLvl = DIFFICULTY_LEVELS_DATA[inputId];

        setDifficultySettingsData(newDifficultyLvl);
      }
    });
  });
};

export default applyGameDifficulty;
