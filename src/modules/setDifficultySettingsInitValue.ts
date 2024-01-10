//Modules
import getGameSettingsData from "./common/getGameSettingsData";

//Interfaces
import { IGameSettings } from "../interfaces/IGameSettings";

const setDifficultySettingsInitValue = () => {
  const { difficulty } = getGameSettingsData() as IGameSettings;
  const { lvlValue } = difficulty;

  const lvlInputs: NodeListOf<HTMLInputElement> = document.getElementsByName("difficulty") as NodeListOf<HTMLInputElement>;

  lvlInputs.forEach((lvlInput: HTMLInputElement) => {
    if (lvlInput.id === lvlValue) lvlInput.checked = true;
  });
};

export default setDifficultySettingsInitValue;
