const GAME_TIMER_ID_NAME: string = "gameTimer";

const stopGameTimer = () => {
  const gameTimerID: number = Number(sessionStorage.getItem(GAME_TIMER_ID_NAME));

  clearInterval(gameTimerID);

  sessionStorage.removeItem(`${gameTimerID}`);
};

export default stopGameTimer;
