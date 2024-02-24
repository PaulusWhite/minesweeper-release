//Interfaces
import { TDifficultyLvl } from "./IGameSettings";

interface ILastResult {
  difficulty: TDifficultyLvl;
  minesQuantity: number;
  time: string;
  moves: string;
  date: Date;
}

export default ILastResult;
