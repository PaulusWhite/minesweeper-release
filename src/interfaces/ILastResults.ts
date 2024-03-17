//Interfaces
import { TDifficultyLvl } from "./IGameSettings";

interface ILastResultRecord {
  difficulty: TDifficultyLvl;
  time: string;
  moves: string;
  date: string;
}

type ILastResultsData = ILastResultRecord[];

export { ILastResultRecord, ILastResultsData };
