//store
import store from "../redux/createStore";

//Interfaces
import { ICell } from "../interfaces/IRedux";
import { IGameSettings, ISavedGame, TDifficultyLvl, IGameInfo } from "../interfaces/IGameSettings";

//Modules
import getGameSettingsData from "./common/getGameSettingsData";
import setGameSettingsData from "./common/setGameSettingsData";
import setGameTimer from "./setGameTimer";
import showPopupMessage from "./common/showPopupMessage";

//Utils
import getMineFieldHTMLNode from "../utils/getMineFieldHTMLNode";
import getGameInfoNodes from "../utils/getGameInfoNodes";

//router
import { navigateTo } from "../router";

const getCurrentState = (): ICell[][] | undefined => {
  const mineField: HTMLDivElement = getMineFieldHTMLNode();
  const currentFieldMatrix: ICell[][] = store.getState().state;

  if (currentFieldMatrix.length === 0) {
    const popupMessage: string = "You can save the game only after having at least one move";

    showPopupMessage(popupMessage);
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

      const recordName: string | null = prompt("Enter the record name");

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
      setGameTimer();
    }
  });
};

export default saveProgress;
