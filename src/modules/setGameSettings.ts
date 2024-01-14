//interfaces
import { IGameSettings, ISavedGame } from "../interfaces/IGameSettings";

//Modules
import getGameSettingsData from "./common/getGameSettingsData";
import setGameSettingsData from "./common/setGameSettingsData";

const MAX_SAVED_PROGRESS_QUANTITY = 5;

const getDefaultSavedProgress = (): ISavedGame[] => {
  const savedProgress: ISavedGame[] = [];

  for (let i = 0; i < MAX_SAVED_PROGRESS_QUANTITY; i++) {
    savedProgress.push({
      id: i,
      name: null,
      state: null,
    });
  }

  return savedProgress;
};

const DEFAULT_GAME_SETTINGS_DATA: IGameSettings = {
  difficulty: {
    lvlValue: "easy-lvl",
    rowCellsQuantity: 10,
    columnCellsQuantity: 10,
    minesQuantity: 10,
  },
  theme: "default",
  savedProgress: getDefaultSavedProgress(),
};

const setGameSettings = () => {
  const gameSettingsData: IGameSettings | null = getGameSettingsData();

  if (gameSettingsData) {
    setGameSettingsData(gameSettingsData);
  } else setGameSettingsData(DEFAULT_GAME_SETTINGS_DATA);
};

export default setGameSettings;
