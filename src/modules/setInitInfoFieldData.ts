//Modules
import getGameSettingsData from "./common/getGameSettingsData";
//Interfaces
import IGameSettings from "../interfaces/IGameSettings";

const setInitInfoFieldData = () => {
  const gameSettingsData: IGameSettings = getGameSettingsData() as IGameSettings;
  const { minesQuantity } = gameSettingsData;

  const bombsQuantityValue: HTMLSpanElement = document.querySelector(".info-field__bombs-quantity") as HTMLSpanElement;
  const timeValue: HTMLSpanElement = document.querySelector(".info-field__time-counter-value") as HTMLSpanElement;
  const movesValue: HTMLSpanElement = document.querySelector(".info-field__moves-counter-value") as HTMLSpanElement;
  const flagsQuantityValue: HTMLSpanElement = document.querySelector(".info-field__flags-counter-value") as HTMLSpanElement;

  bombsQuantityValue.innerHTML = `${minesQuantity}`;
  timeValue.innerHTML = "00:00";
  movesValue.innerHTML = "0";
  flagsQuantityValue.innerHTML = "0";
};

export default setInitInfoFieldData;
