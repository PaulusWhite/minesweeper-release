const setMovesCounterValue = () => {
  const movesCounter: HTMLSpanElement = document.querySelector(".info-field__moves-counter-value") as HTMLSpanElement;
  let movesCounterValue: number = +movesCounter.innerHTML;

  movesCounterValue += 1;
  movesCounter.innerHTML = `${movesCounterValue}`;
};

export default setMovesCounterValue;
