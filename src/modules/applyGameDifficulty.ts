//store
import store from "../redux/createStore";

//Actions
import createMineFieldMatrixAction from "../redux/actions,";

//Utils
import getCustomDifficultyInputs from "../utils/getCustomDifficultyInputs";

//Interfaces
import { IDifficultySettingsData, IEasyLvl, IMediumLvl, IHardLvl, TDifficultyLvl, ICustomLvl } from "../interfaces/IGameSettings";
import { IGameSettings } from "../interfaces/IGameSettings";

//Modules
import getGameSettingsData from "./common/getGameSettingsData";
import setGameSettingsData from "./common/setGameSettingsData";
import rerenderMinesField from "./common/rerenderMinesField";
import { setDifficultySettingsInitValue } from "./common/setDifficultySettingsInitValue";
import showPopupMessage from "./common/showPopupMessage";
import unfocusOtherDifficultyOptions from "./common/unfocusOtherDifficultyOptions";

const MAX_CELLS_QUANTITY: number = 1225;
const MIN_CELLS_QUANTITY_IN_DIRECTION: number = 5;
const MIN_MINES_QUANTITY: number = 10;
const MINES_CELLS_DIFFERENTIAL: number = 10;

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

const checkIfSettingsSame = (lvlInputs: NodeListOf<HTMLInputElement>): boolean => {
  const currentGameSettingsData: IGameSettings = getGameSettingsData() as IGameSettings;
  const currentLvlValue: string = currentGameSettingsData.difficulty.lvlValue;
  let isSettingsSame = false;

  lvlInputs.forEach((lvlInput: HTMLInputElement) => {
    if (currentLvlValue === lvlInput.id && lvlInput.checked) isSettingsSame = true;
  });

  return isSettingsSame;
};

const setDifficultySettingsData = (newDifficultyLvl: TDifficultyLvl) => {
  const currentGameSettingsData: IGameSettings = getGameSettingsData() as IGameSettings;
  const { savedProgress } = currentGameSettingsData;

  const newGameSettingsData: IGameSettings = {
    difficulty: newDifficultyLvl,
    savedProgress,
  };

  setGameSettingsData(newGameSettingsData);
  rerenderMinesField();
  store.dispatch(createMineFieldMatrixAction([]));
};

const clearCustomInputs = () => {
  const customInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(".custom-lvl input");

  customInputs.forEach((input: HTMLInputElement) => (input.value = ""));
};

const validateCustomSettings = (widthCellsQuantity: number, heightCellsQuantity: number, minesQuantity: number): boolean => {
  const totalCellsQuantity: number = widthCellsQuantity * heightCellsQuantity;

  if (totalCellsQuantity > MAX_CELLS_QUANTITY) {
    showPopupMessage(`Max cells quantity can be no more than ${MAX_CELLS_QUANTITY}`);
    return false;
  }

  if (widthCellsQuantity < MIN_CELLS_QUANTITY_IN_DIRECTION || heightCellsQuantity < MIN_CELLS_QUANTITY_IN_DIRECTION) {
    showPopupMessage(`Min cells quantity in any direction can not be less than ${MIN_CELLS_QUANTITY_IN_DIRECTION}`);
    return false;
  }

  if (minesQuantity < MIN_MINES_QUANTITY) {
    showPopupMessage(`Min Mines quantity can not be less than ${MIN_MINES_QUANTITY}`);
    return false;
  }

  if ((totalCellsQuantity - MINES_CELLS_DIFFERENTIAL) < minesQuantity) {
    showPopupMessage(`Mines quantity must be at least ${MINES_CELLS_DIFFERENTIAL} less than total cells quantity`);
    return false;
  }

  return true;
};

const getNewCustomDifficultyLvlData = (): ICustomLvl | null => {
  const { widthCellsInput, heightCellsInput, minesInput } = getCustomDifficultyInputs();
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

const clickGameDifficultyLvls = () => {
  const allInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(`input[type="radio"]`);

  allInputs.forEach((input: HTMLInputElement) => {
    input.addEventListener("change", () => {
      unfocusOtherDifficultyOptions(input)
    });
  });
};

const applyGameDifficulty = () => {
  clickGameDifficultyLvls();

  const applyBtn: HTMLButtonElement = document.querySelector(".difficulty-settings__apply-btn") as HTMLButtonElement;

  applyBtn.addEventListener("click", () => {
    const lvlInputs: NodeListOf<HTMLInputElement> = document.getElementsByName("difficulty") as NodeListOf<HTMLInputElement>;
    const isSettingsSame: boolean = checkIfSettingsSame(lvlInputs);

    if (isSettingsSame){
      const message: string = "You already have this game difficulty";
      showPopupMessage(message);
      return;
    }

    lvlInputs.forEach((lvlInput: HTMLInputElement) => {
      const message: string = "Game difficulty was changed";

      if (lvlInput.checked && lvlInput.id !== "custom-lvl") {
        const inputId: keyof IDifficultySettingsData = lvlInput.id as keyof IDifficultySettingsData;
        const newDifficultyLvl: IEasyLvl | IMediumLvl | IHardLvl = DIFFICULTY_LEVELS_DATA[inputId];

        setDifficultySettingsData(newDifficultyLvl);
        setDifficultySettingsInitValue();

        showPopupMessage(message);
      }

      if (lvlInput.checked && lvlInput.id === "custom-lvl") {
        const newDifficultyLvl: ICustomLvl | null = getNewCustomDifficultyLvlData();

        if (!newDifficultyLvl) return;

        setDifficultySettingsData(newDifficultyLvl);
        clearCustomInputs();
        setDifficultySettingsInitValue();
        showPopupMessage(message);
      }
    });
  });
};

export default applyGameDifficulty;
