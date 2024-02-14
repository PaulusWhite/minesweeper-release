//Modules
import getGameSettingsData from "./getGameSettingsData";

//Utils
import getCustomDifficultyInputs from "../../utils/getCustomDifficultyInputs";

//Interfaces
import { IGameSettings, IEasyLvl, IMediumLvl, IHardLvl, ICustomLvl } from "../../interfaces/IGameSettings";

const setRadioIndicator = (lvlInput: HTMLInputElement, flag: boolean) => {
  const label: HTMLLabelElement = lvlInput.nextElementSibling as HTMLLabelElement;

  flag ? label.classList.add("showRadio") : label.classList.remove("showRadio");
};

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
      setRadioIndicator(lvlInput, true);
      displayCustomDifficultySettingsInitValue(difficulty, true);
    }

    if (lvlInput.id === lvlValue && lvlInput.id === "custom-lvl") {
      displayCustomDifficultySettingsInitValue(difficulty);
    }

    if (lvlInput.id !== lvlValue) setRadioIndicator(lvlInput, false);
  });
};

export { setRadioIndicator, setDifficultySettingsInitValue };
