//store
import store from "../redux/createStore";

//Interfaces
import { ICell } from "../interfaces/IRedux";
import { IGameSettings, ISavedGame, TDifficultyLvl, IGameInfo } from "../interfaces/IGameSettings";

//Modules
import getGameSettingsData from "./common/getGameSettingsData";
import setGameSettingsData from "./common/setGameSettingsData";
import displayPopupMessage from "./common/displayPopupMessage";

//Utils
import getMineFieldHTMLNode from "../utils/getMineFieldHTMLNode";
import getGameInfoNodes from "../utils/getGameInfoNodes";

//router
import { navigateTo } from "../router";

const MAX_NAME_SYMBOLS_LENGTH: number = 25;

const getCurrentState = (): ICell[][] | undefined => {
  const mineField: HTMLDivElement = getMineFieldHTMLNode();
  const currentFieldMatrix: ICell[][] = store.getState().state;
  const emoji: HTMLImageElement = document.querySelector(".info-field__status-emoji")!;

  if (emoji.id === "lose" || emoji.id === "win") {
    const popupMessage: string = "You can not save finished game";
    displayPopupMessage(popupMessage);

    return;
  }

  if (currentFieldMatrix.length === 0) {
    const popupMessage: string = "You can save the game only after having at least one move";

    displayPopupMessage(popupMessage);
    return;
  }

  const savedState = currentFieldMatrix.map((cellsColumn: ICell[]) => {
    cellsColumn = cellsColumn.map((cell: ICell) => {
      const cellSerialNumber: number = cell.serialNumber;
      const targetMineFieldCell: HTMLSpanElement = mineField.children[cellSerialNumber] as HTMLSpanElement;
      const isMined: boolean = targetMineFieldCell.classList.contains("cell__mined") ? true : false;
      const isFlag: boolean = targetMineFieldCell.classList.contains("cell__flagged") ? true : false;
      const isOpened: boolean = targetMineFieldCell.classList.contains("cell__open") ? true : false;
      const isIndicated: boolean = targetMineFieldCell.classList.contains("cell__indicated") ? true : false;
      const serialNumber: number = cell.serialNumber;
      const minesAround: number = cell.minesAround;

      const newCellData: ICell = {
        isMined,
        isFlag,
        isOpened,
        isIndicated,
        serialNumber,
        minesAround,
      };

      return newCellData;
    });

    return cellsColumn;
  });

  return savedState;
};

const getGameInfo = (): IGameInfo => {
  const { timeCounter, movesCounter, flagsCounter } = getGameInfoNodes();

  const gameInfo: IGameInfo = {
    timeCounter: timeCounter.innerHTML,
    movesCounter: +movesCounter.innerHTML,
    flagsCounter: +flagsCounter.innerHTML,
  };

  return gameInfo;
};

const saveProgress = () => {
  const progressList: HTMLUListElement = document.querySelector(".data-entry-list") as HTMLUListElement;

  progressList.addEventListener("click", (event: Event) => {
    const target: HTMLElement = event.target as HTMLElement;

    if (target.className === "saved-record__save-btn") {
      const currentGameState: ICell[][] | undefined = getCurrentState();

      if (!currentGameState) return; // If player tries to save the game with no move made

      displayPopupMessage(false); //remove popup message if it is
      
      const recordName: string | null = prompt("Enter the record name");

      if (recordName && recordName?.length > MAX_NAME_SYMBOLS_LENGTH) {
        const message: string = `Name of the record can not be more than ${MAX_NAME_SYMBOLS_LENGTH} symbols`;
        displayPopupMessage(message);
        return;
      }

      const currentGameSettings: IGameSettings = getGameSettingsData() as IGameSettings;
      const savedProgress: (ISavedGame | null)[] = currentGameSettings.savedProgress;

      const record: HTMLLIElement = target.parentElement as HTMLLIElement;
      const recordId: number = +(record.dataset.savedRecordId as string);

      const name = recordName ? recordName : `Record ${recordId + 1}`;
      const gameDifficulty: TDifficultyLvl = currentGameSettings.difficulty;

      const prevRecordData: ISavedGame = currentGameSettings.savedProgress[recordId] as ISavedGame;

      const mineFieldMatrix: ICell[][] = store.getState().state;
      const gameInfo: IGameInfo = getGameInfo();
      const newRecordData: ISavedGame = {
        ...prevRecordData,
        name,
        state: currentGameState,
        gameDifficulty,
        gameInfo,
        mineFieldMatrix,
      };
      savedProgress[recordId] = newRecordData;

      setGameSettingsData({ ...currentGameSettings, savedProgress });
      navigateTo("/");
    }
  });
};

export default saveProgress;
