interface IGameInfoNodes {
  timeCounter: HTMLSpanElement;
  movesCounter: HTMLSpanElement;
  flagsCounter: HTMLSpanElement;
}

const getGameInfoNodes = (): IGameInfoNodes => {
  const infoFieldGame: HTMLDivElement = document.querySelector(".info_field__game-info") as HTMLDivElement;
  const timeCounter: HTMLSpanElement = infoFieldGame.firstElementChild?.lastElementChild as HTMLSpanElement;
  const movesCounter: HTMLSpanElement = infoFieldGame.children[1].firstElementChild as HTMLSpanElement;
  const flagsCounter: HTMLSpanElement = infoFieldGame.lastElementChild?.lastElementChild as HTMLSpanElement;
  return {
    timeCounter,
    movesCounter,
    flagsCounter,
  };
};

export default getGameInfoNodes;
