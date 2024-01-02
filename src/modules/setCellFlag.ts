const setCellFlag = (mineField: HTMLDivElement, clickedCellIndex: number) => {
  const clickedCell: HTMLSpanElement = mineField.children[clickedCellIndex] as HTMLSpanElement;
  const flagCounter: HTMLSpanElement = document.querySelector(".info-field__flags-counter-value") as HTMLSpanElement;
  let flagCounterValue: number = +flagCounter.innerHTML;

  if (clickedCell.classList.contains("cell__flagged")) {
    clickedCell.classList.remove("cell__flagged");
    flagCounterValue -= 1;
  } else {
    clickedCell.classList.add("cell__flagged");
    flagCounterValue += 1;
  }

  flagCounter.innerHTML = `${flagCounterValue}`;
};

export default setCellFlag;
