// Interfaces
import IGameSettings from "../interfaces/IGameSettings";

const GAME_SETTINGS_DATA_NAME = "game-settings-data";

const getGameSettingsData = (): IGameSettings | null => {
  const gameSettingsData: string | null = localStorage.getItem(GAME_SETTINGS_DATA_NAME);

  return gameSettingsData ? JSON.parse(gameSettingsData) : null;
};

export default getGameSettingsData;
