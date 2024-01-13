//Modules
import getGameSettingsData from "./getGameSettingsData";

//Utils
import getCustomDifficultyInputs from "../../utils/getCustomDifficultyInputs";

//Interfaces
import { IGameSettings, IEasyLvl, IMediumLvl, IHardLvl, ICustomLvl } from "../../interfaces/IGameSettings";

const displayCustomDifficultySettingsInitValue = (difficulty: IEasyLvl | IMediumLvl | IHardLvl | ICustomLvl, isRemove?: boolean) => {
  const { widthCellsInput, heightCellsInput, minesInput } = getCustomDifficultyInputs();
  const { rowCellsQuantity, columnCellsQuantity, minesQuantity } = difficulty;

  widthCellsInput.placeholder = `${isRemove ? "" : rowCellsQuantity}`;
  heightCellsInput.placeholder = `${isRemove ? "" : columnCellsQuantity}`;
  minesInput.placeholder = `${isRemove ? "" : minesQuantity}`;
};

const setDifficultySettingsInitValue = () => {
  const { difficulty } = getGameSettingsData() as IGameSettings;
  const { lvlValue } = difficulty;

  const lvlInputs: NodeListOf<HTMLInputElement> = document.getElementsByName("difficulty") as NodeListOf<HTMLInputElement>;

  lvlInputs.forEach((lvlInput: HTMLInputElement) => {
    if (lvlInput.id === lvlValue) {
      lvlInput.checked = true;
      displayCustomDifficultySettingsInitValue(difficulty, true);
    }

    if (lvlInput.id === lvlValue && lvlInput.id === "custom-lvl") {
      displayCustomDifficultySettingsInitValue(difficulty);
    }
  });
};

export default setDifficultySettingsInitValue;
