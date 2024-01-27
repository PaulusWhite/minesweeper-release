//Modules
import rerenderMinesField from "./common/rerenderMinesField";

const GAME_TIMER_ID_NAME: string = "gameTimer";

const restartGame = () => {
  const restartBtn: HTMLButtonElement = document.querySelector(".info-field__restart-btn") as HTMLButtonElement;

  restartBtn.addEventListener("click", () => {
    const prevGameTimer: number = Number(sessionStorage.getItem(GAME_TIMER_ID_NAME));

    sessionStorage.removeItem(GAME_TIMER_ID_NAME);

    clearInterval(prevGameTimer);
    rerenderMinesField();
  });
};

export default restartGame;
