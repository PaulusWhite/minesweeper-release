//Utils
import getGameInfoNodes from "../utils/getGameInfoNodes";

//Modules
import { GAME_TIMER_ID_NAME } from "./common/resetGameTimer";

const setGameTimer = () => {
  const { timeCounter } = getGameInfoNodes();

  const intervalID = setInterval(() => {
    const currentTimerValue: string = timeCounter.innerHTML;
    const [minValue, secValue] = currentTimerValue.split(":");
    let newSecValue: string = `${+secValue + 1}`;
    let newMinValue: string = minValue; //value of the minute doesn't change if the minute is the same

    if (newSecValue.length === 1) newSecValue = `0${newSecValue}`;

    if (+newSecValue === 60) {
      newMinValue = `${+minValue + 1}`;
      newSecValue = "00";

      if (newMinValue.length === 1) newMinValue = `0${newMinValue}`;
    }

    const newTimerValue = `${newMinValue}:${newSecValue}`;

    timeCounter.innerHTML = newTimerValue;
  }, 1000);

  sessionStorage.setItem(GAME_TIMER_ID_NAME, `${intervalID}`);
};

export default setGameTimer;
