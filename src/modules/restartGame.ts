//Modules
import rerenderMinesField from "./common/rerenderMinesField";
import { GAME_TIMER_ID_NAME, removeSStorageGameTimerID } from "./common/resetGameTimer";

const restartGame = () => {
  const restartBtn: HTMLButtonElement = document.querySelector(".info-field__restart-btn") as HTMLButtonElement;

  restartBtn.addEventListener("click", () => {
    const prevGameTimer: number = Number(sessionStorage.getItem(GAME_TIMER_ID_NAME));

    removeSStorageGameTimerID();

    clearInterval(prevGameTimer);
    rerenderMinesField();
  });
};

export default restartGame;
