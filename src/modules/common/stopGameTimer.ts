//Modules
import { GAME_TIMER_ID_NAME } from "./resetGameTimer";

const stopGameTimer = () => {
  const gameTimerID: number = Number(sessionStorage.getItem(GAME_TIMER_ID_NAME));

  clearInterval(gameTimerID);

  sessionStorage.removeItem(`${GAME_TIMER_ID_NAME}`);
};

export default stopGameTimer;
