// //Store
// import store from "../redux/createStore";

//Interfaces
import { IDifficultySettingsData, IEasyLvl, IMediumLvl, IHardLvl, TDifficultyLvl, ICustomLvl } from "../interfaces/IGameSettings";
import { IGameSettings } from "../interfaces/IGameSettings";
// import { ICell } from "../interfaces/IRedux";

//Modules
import getGameSettingsData from "./common/getGameSettingsData";
import setGameSettingsData from "./setGameSettingsData";
import createMineField from "./createMineField";
import setInitInfoFieldData from "./setInitInfoFieldData";

const MAX_CELLS_QUANTITY = 1600;
const MIN_CELLS_QUANTITY_IN_DIRECTION = 5;
const MIN_MINES_QUANTITY = 10;
const MAX_MINES_PRECENT_OF_THE_CELLS = 70;

const DIFFICULTY_LEVELS_DATA: IDifficultySettingsData = {
  "easy-lvl": {
    lvlValue: "easy-lvl",
    rowCellsQuantity: 10,
    columnCellsQuantity: 10,
    minesQuantity: 10,
  },
  "medium-lvl": {
    lvlValue: "medium-lvl",
    rowCellsQuantity: 15,
    columnCellsQuantity: 15,
    minesQuantity: 35,
  },
  "hard-lvl": {
    lvlValue: "hard-lvl",
    rowCellsQuantity: 25,
    columnCellsQuantity: 25,
    minesQuantity: 99,
  },
};

const rerenderMinesField = () => {
  createMineField();
  setInitInfoFieldData();
};

const setDifficultySettingsData = (newDifficultyLvl: TDifficultyLvl) => {
  const currentGameSettingsData: IGameSettings = getGameSettingsData() as IGameSettings;
  const { theme } = currentGameSettingsData;

  const newGameSettingsData: IGameSettings = {
    difficulty: newDifficultyLvl,
    theme,
  };

  setGameSettingsData(newGameSettingsData);
  rerenderMinesField();
};

const clearCustomInputs = () => {
  const customInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(".custom-lvl input");

  customInputs.forEach((input: HTMLInputElement) => (input.value = ""));
};

const validateCustomSettings = (widthCellsQuantity: number, heightCellsQuantity: number, minesQuantity: number): boolean => {
  const totalCellsQuantity: number = widthCellsQuantity * heightCellsQuantity;
  const minesPrecentOfCells: number = (minesQuantity * 100) / totalCellsQuantity; // 100 is procent

  if (totalCellsQuantity > MAX_CELLS_QUANTITY) {
    alert("Max cells quantity can be no more than 1600");
    return false;
  }

  if (widthCellsQuantity < MIN_CELLS_QUANTITY_IN_DIRECTION || heightCellsQuantity < MIN_CELLS_QUANTITY_IN_DIRECTION) {
    alert("Min cells quantity in any direction can not be less than 5");
    return false;
  }

  if (minesQuantity < MIN_MINES_QUANTITY) {
    alert("MIN Mines quantity can not be less than 10");
    return false;
  }

  if (minesPrecentOfCells > MAX_MINES_PRECENT_OF_THE_CELLS) {
    alert("Max mines procent of total cells quantity cen not be more than 70");
    return false;
  }

  return true;
};

const getNewCustomDifficultyLvlData = (): ICustomLvl | null => {
  const widthCellsInput: HTMLInputElement = document.querySelector("#custom-lvl__row-cells-custom-value") as HTMLInputElement;
  const heightCellsInput: HTMLInputElement = document.querySelector("#custom-lvl__width-cells-custom-value") as HTMLInputElement;
  const minesInput: HTMLInputElement = document.querySelector("#custom-lvl__mines-quantity-custom-value") as HTMLInputElement;

  const widthCellsQuantity: number = +widthCellsInput.value;
  const heightCellsQuantity: number = +heightCellsInput.value;
  const minesQuantity: number = +minesInput.value;

  let newDifficultyLvl: ICustomLvl | null = null;

  const isSettingsValid: boolean = validateCustomSettings(widthCellsQuantity, heightCellsQuantity, minesQuantity);

  if (!isSettingsValid) return null;

  newDifficultyLvl = {
    lvlValue: "custom-lvl",
    rowCellsQuantity: widthCellsQuantity,
    columnCellsQuantity: heightCellsQuantity,
    minesQuantity: minesQuantity,
  };

  return newDifficultyLvl;
};

const applyGameDifficulty = () => {
  const applyBtn: HTMLButtonElement = document.querySelector(".difficulty-settings__apply-btn") as HTMLButtonElement;

  applyBtn.addEventListener("click", () => {
    const lvlInputs: NodeListOf<HTMLInputElement> = document.getElementsByName("difficulty") as NodeListOf<HTMLInputElement>;

    lvlInputs.forEach((lvlInput: HTMLInputElement) => {
      if (lvlInput.checked && lvlInput.id !== "custom-lvl") {
        const inputId: keyof IDifficultySettingsData = lvlInput.id as keyof IDifficultySettingsData;
        const newDifficultyLvl: IEasyLvl | IMediumLvl | IHardLvl = DIFFICULTY_LEVELS_DATA[inputId];

        setDifficultySettingsData(newDifficultyLvl);
      }
      if (lvlInput.checked && lvlInput.id === "custom-lvl") {
        const newDifficultyLvl: ICustomLvl | null = getNewCustomDifficultyLvlData();

        if (!newDifficultyLvl) return;

        setDifficultySettingsData(newDifficultyLvl);
        clearCustomInputs();
      }
    });
  });
};

export default applyGameDifficulty;
