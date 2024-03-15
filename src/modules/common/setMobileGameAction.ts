//store
import store from "../../redux/createStore";

//Actions
import createMineFieldMatrixAction from "../../redux/actions,";

//Utils
import getMineFieldHTMLNode from "../../utils/getMineFieldHTMLNode";

//Interfaces
import { ICell } from "../../interfaces/IRedux";

//Modules
import checkIsFieldClicked from "./checkIsFieldClicked";
import createMineFieldMatrix from "../createMineFieldMatrix";
import setGameTimer from "../setGameTimer";
import clickCell from "./clickCell";
import setCellFlag from "../setCellFlag";

//Common variables
import { GAME_TIMER_ID_NAME } from "./resetGameTimer";

const setMobileGameAction = () => {
  const mineField: HTMLDivElement = getMineFieldHTMLNode();

  window.addEventListener("contextmenu", (Event: Event) => {
    Event.preventDefault();

    const target: HTMLElement = Event.target as HTMLElement;
      console.log(target)

      if (target.closest(".cell")) {
        if (target.classList.length > 1 && !target.classList.contains("cell__flagged")) return;

        const clickedCellIndex: number = +(target.dataset.cellIndex as string);

        setCellFlag(mineField, clickedCellIndex);
      }
  });

  window.addEventListener("click", (Event: Event) => {
    const target: HTMLElement = Event.target as HTMLElement;
    let isFirstCellClick: boolean = checkIsFieldClicked(); // indicator for creating mines matrix after first click

    if (target.closest(".cell")) {
      if (target.classList.length > 1) return;

      const clickedCellIndex: number = +(target.dataset.cellIndex as string);

      if (isFirstCellClick) {
        isFirstCellClick = !isFirstCellClick;

        const mineFieldMatrix: ICell[][] = createMineFieldMatrix(clickedCellIndex);

        store.dispatch(createMineFieldMatrixAction(mineFieldMatrix));
        setGameTimer();
      } else {
        if (!sessionStorage.getItem(GAME_TIMER_ID_NAME)) setGameTimer();
      }

      clickCell(mineField, clickedCellIndex);
    }
  });
};

export default setMobileGameAction;
