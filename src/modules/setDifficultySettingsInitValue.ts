//Modules
import getGameSettingsData from "./common/getGameSettingsData";

//Interfaces
import IGameSettings from "../interfaces/IGameSettings";

const setDifficultySettingsInitValue = () => {
  const { difficulty } = getGameSettingsData() as IGameSettings;
  const { lvlValue } = difficulty;

  const tableInputs: NodeListOf<HTMLInputElement> = document.getElementsByName("difficulty") as NodeListOf<HTMLInputElement>;

  tableInputs.forEach((input: HTMLInputElement) => {
    if (input.id === lvlValue) input.checked = true;
  });
};

export default setDifficultySettingsInitValue;
