//Modules
import getGameSettingsData from "./common/getGameSettingsData";

//Interfaces
import { IGameSettings } from "../interfaces/IGameSettings";

const setInitInfoFieldData = () => {
  const gameSettingsData: IGameSettings = getGameSettingsData() as IGameSettings;
  const { difficulty } = gameSettingsData;

  const bombsCounter: HTMLSpanElement = document.querySelector(".info-field__bombs-quantity") as HTMLSpanElement;
  const timeCounter: HTMLSpanElement = document.querySelector(".info-field__time-counter-value") as HTMLSpanElement;
  const movesCounter: HTMLSpanElement = document.querySelector(".info-field__moves-counter-value") as HTMLSpanElement;
  const flagsCounter: HTMLSpanElement = document.querySelector(".info-field__flags-counter-value") as HTMLSpanElement;

  bombsCounter.innerHTML = `${difficulty.minesQuantity}`;
  timeCounter.innerHTML = "00:00";
  movesCounter.innerHTML = "0";
  flagsCounter.innerHTML = "0";
};

export default setInitInfoFieldData;
