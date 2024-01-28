const GAME_TIMER_ID_NAME: string = "gameTimer";

const removeSStorageGameTimerID = () => {
  sessionStorage.removeItem(GAME_TIMER_ID_NAME);
};

export { GAME_TIMER_ID_NAME, removeSStorageGameTimerID };
