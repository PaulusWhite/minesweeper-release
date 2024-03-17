import { ICustomDifficultyInputs } from "../interfaces/IGameSettings";

const getCustomDifficultyInputs = (): ICustomDifficultyInputs => {
  const widthCellsInput: HTMLInputElement = document.querySelector("#custom-lvl__row-cells-custom-value") as HTMLInputElement;
  const heightCellsInput: HTMLInputElement = document.querySelector("#custom-lvl__width-cells-custom-value") as HTMLInputElement;
  const minesInput: HTMLInputElement = document.querySelector("#custom-lvl__mines-quantity-custom-value") as HTMLInputElement;

  return { widthCellsInput, heightCellsInput, minesInput };
};

export default getCustomDifficultyInputs;
