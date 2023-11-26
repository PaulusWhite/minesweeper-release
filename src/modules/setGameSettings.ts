//interfaces
import IGameSettings from "../interfaces/IGameSettings";

// Modules
import getGameSettingsData from "./getGameSettingsData";
import setGameSettingsData from "./setGameSettingsData";

const DEFAULT_GAME_SETTINGS_DATA: IGameSettings = {
  rowCells: 10,
  columnCells: 10,
  minesNumber: 10,
  iconsStyle: "default",
};

const setGameSettings = () => {
  const gameSettingsData: IGameSettings | null = getGameSettingsData();

  if (gameSettingsData) {
    setGameSettingsData(gameSettingsData);
  } else setGameSettingsData(DEFAULT_GAME_SETTINGS_DATA);
};

export default setGameSettings;
