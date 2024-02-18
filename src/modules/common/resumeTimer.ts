//utils
import getGameInfoNodes from "../../utils/getGameInfoNodes";

//modules
import setGameTimer from "../setGameTimer";
import { removeSStorageGameTimerID } from "./resetGameTimer";
import { GAME_TIMER_ID_NAME } from "./resetGameTimer";

const resumeTimer = () => {
  const { movesCounter } = getGameInfoNodes();
  const gameTimerID: number = Number(sessionStorage.getItem(GAME_TIMER_ID_NAME));

  const moveValue: number = +movesCounter.innerHTML;

  if(moveValue > 0 && !gameTimerID){
    removeSStorageGameTimerID();
    setGameTimer();
  }
}

export default resumeTimer;