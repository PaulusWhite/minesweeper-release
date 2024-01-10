//Interfaces
import { IGameSettings } from "../interfaces/IGameSettings";

const GAME_SETTINGS_DATA_NAME = "game-settings-data";

const setGameSettingsData = (newGameSettingsData: IGameSettings) => {
  localStorage.setItem(GAME_SETTINGS_DATA_NAME, JSON.stringify(newGameSettingsData));
};

export default setGameSettingsData;
