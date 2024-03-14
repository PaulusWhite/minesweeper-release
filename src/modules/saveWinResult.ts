//Utils
import getGameInfoNodes from "../utils/getGameInfoNodes";

//Modules
import getGameSettingsData from "./common/getGameSettingsData";
import addGameLastResultsDataRecord from "./addGameLastResultsData";

//Interfaces
import { IGameSettings } from "../interfaces/IGameSettings";
import { TDifficultyLvl } from "../interfaces/IGameSettings";
import { ILastResultRecord } from "../interfaces/ILastResults";

const getCurrentDate = (): string => {
  const date: Date = new Date();

  const day: string = String(date.getDate()).padStart(2, "0");
  const month: string = String(date.getMonth() + 1).padStart(2, "0");
  const year: number = date.getFullYear();
  const time: string = `${date.getHours()} ${date.getMinutes()}`;

  const currentDate: string = `${day}/${month}/${year}/${time}`;

  return currentDate;
};

const saveWinResult = () => {
  const { timeCounter, movesCounter } = getGameInfoNodes();
  const gameSettingsData: IGameSettings = getGameSettingsData() as IGameSettings;

  const timeValue: string = timeCounter.innerHTML;
  const movesValue: string = movesCounter.innerHTML;
  const gameDifficulty: TDifficultyLvl = gameSettingsData.difficulty;

  const winResultRecord: ILastResultRecord = {
    difficulty: gameDifficulty,
    time: timeValue,
    moves: movesValue,
    date: getCurrentDate(),
  };

  addGameLastResultsDataRecord(winResultRecord);
};

export default saveWinResult;
