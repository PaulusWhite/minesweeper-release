//store
import store from "../redux/createStore";

//Actions
import createMineFieldMatrixAction from "../redux/actions,";

//Modules
import getGameSettingsData from "./common/getGameSettingsData";
import setGameSettingsData from "./common/setGameSettingsData";
import rerenderMinesField from "./common/rerenderMinesField";
import { removeSStorageGameTimerID } from "./common/resetGameTimer";
import setGameTimer from "./setGameTimer";

//Interfaces
import { IGameSettings, TDifficultyLvl, ISavedGame, IGameInfo } from "../interfaces/IGameSettings";
import { ICell } from "../interfaces/IRedux";

//Utils
import getMineFieldHTMLNode from "../utils/getMineFieldHTMLNode";
import getGameInfoNodes from "../utils/getGameInfoNodes";

//router
import { navigateTo } from "../router";

const getMineFieldCellClass = (cell: ICell): string | null => {
  let className: string | null = null;
  if (cell.isFlag) className = "cell__flagged";
  if (cell.isIndicated) className = "cell__indicated";
  if (cell.isMined) className = "cell__mined";
  if (cell.isOpened) className = "cell__open";

  return className;
};

const revealCellsFromRecord = (recordState: ICell[][]) => {
  const mineField: HTMLDivElement = getMineFieldHTMLNode();
  const mineFieldCells: HTMLCollection = mineField.children;

  recordState.forEach((cellsColumn: ICell[]) => {
    cellsColumn.forEach((cell: ICell) => {
      const cellSerialNumber: number = cell.serialNumber;
      const mineFieldCell: HTMLSpanElement = mineFieldCells[cellSerialNumber] as HTMLSpanElement;

      const cellClass: string | null = getMineFieldCellClass(cell);

      cellClass && mineFieldCell.classList.add(`${cellClass}`);

      if (mineFieldCell.classList.contains("cell__indicated")) mineFieldCell.innerHTML = `${cell.minesAround}`;
    });
  });
};

const setRecordGameInfo = (recordGameInfo: IGameInfo) => {
  const { timeCounter, movesCounter, flagsCounter } = getGameInfoNodes();

  timeCounter.innerHTML = recordGameInfo.timeCounter;
  movesCounter.innerHTML = `${recordGameInfo.movesCounter}`;
  flagsCounter.innerHTML = `${recordGameInfo.flagsCounter}`;
};

const loadGameProgress = () => {
  const progressList: HTMLUListElement = document.querySelector(".saved-games-list") as HTMLUListElement;

  progressList.addEventListener("click", (event: Event) => {
    const target: HTMLElement = event.target as HTMLElement;

    if (target.className === "saved-record__load-btn") {
      const gameSettingsData: IGameSettings = getGameSettingsData() as IGameSettings;

      const record: HTMLLIElement = target.parentElement as HTMLLIElement;
      const recordId: number = +(record.dataset.savedRecordId as string);
      const recordGameData: ISavedGame | null = gameSettingsData.savedProgress[recordId];

      if (recordGameData === null) {
        console.log("The record is empty");
        return;
      }

      const recordState: ICell[][] = recordGameData.state as ICell[][];
      const recordMineFieldMatrix: ICell[][] = recordGameData.mineFieldMatrix as ICell[][];
      const recordGameDifficuty: TDifficultyLvl = recordGameData.gameDifficulty;
      const recordGameInfo: IGameInfo = recordGameData.gameInfo as IGameInfo;

      store.dispatch(createMineFieldMatrixAction(recordMineFieldMatrix));
      setGameSettingsData({ ...gameSettingsData, difficulty: recordGameDifficuty });
      rerenderMinesField();
      revealCellsFromRecord(recordState);
      setRecordGameInfo(recordGameInfo);
      navigateTo("/");
      removeSStorageGameTimerID();
      setGameTimer();
    }
  });
};

export default loadGameProgress;
