//store
import store from "../redux/createStore";

//actions
import createMineFieldMatrixAction from "../redux/actions,";

//Modules
import rerenderMinesField from "./common/rerenderMinesField";
import { GAME_TIMER_ID_NAME, removeSStorageGameTimerID } from "./common/resetGameTimer";
import setEmoji from "./common/setEmoji";

//Utils
import getGameInfoNodes from "../utils/getGameInfoNodes";

const checkIsGameBegun = (): boolean => {
  let isGameBegun = false;
  const { movesCounter, flagsCounter } = getGameInfoNodes();

  if (+movesCounter.innerHTML !== 0 || +flagsCounter.innerHTML !== 0) isGameBegun = true;

  return isGameBegun;
};

const restartGame = () => {
  const restartBtn: HTMLButtonElement = document.querySelector(".info-field__restart-btn") as HTMLButtonElement;

  restartBtn.addEventListener("click", async () => {
    try {
      const isGameBegun: boolean = checkIsGameBegun();

      if (!isGameBegun) return;

      const prevGameTimer: number = Number(sessionStorage.getItem(GAME_TIMER_ID_NAME));

      removeSStorageGameTimerID();

      clearInterval(prevGameTimer);

      await rerenderMinesField();

      store.dispatch(createMineFieldMatrixAction([]));
      setEmoji("default");
    } catch (err) {
      console.log(err);
    }
  });
};

export default restartGame;
