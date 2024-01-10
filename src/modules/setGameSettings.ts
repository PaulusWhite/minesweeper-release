//interfaces
import { IGameSettings } from "../interfaces/IGameSettings";

//Modules
import getGameSettingsData from "./common/getGameSettingsData";
import setGameSettingsData from "./setGameSettingsData";

const DEFAULT_GAME_SETTINGS_DATA: IGameSettings = {
  difficulty: {
    lvlValue: "easy-lvl",
    rowCellsQuantity: 10,
    columnCellsQuantity: 10,
    minesQuantity: 10,
  },
  theme: "default",
};

const setGameSettings = () => {
  const gameSettingsData: IGameSettings | null = getGameSettingsData();

  if (gameSettingsData) {
    setGameSettingsData(gameSettingsData);
  } else setGameSettingsData(DEFAULT_GAME_SETTINGS_DATA);
};

export default setGameSettings;
