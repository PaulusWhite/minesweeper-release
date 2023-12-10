// // store
import store from "../redux/createStore";

// actions
import createMinesFieldMatrixAction from "../redux/actions,";

// modules
import createMinesFieldMatrix from "./createMinesFieldMatrix";

const setGameAction = () => {
  const field: HTMLDivElement = document.querySelector(".field") as HTMLDivElement;
  let isFirstCellClick: boolean = true; // indicator for creating mines matrix after first click

  field.addEventListener("click", (Event: Event) => {
    const target: HTMLElement = Event.target as HTMLElement;

    if (target.closest(".cell")) {
      if (isFirstCellClick) {
        isFirstCellClick = !isFirstCellClick;
        const minesFieldMatrix = createMinesFieldMatrix();
        store.dispatch(createMinesFieldMatrixAction(minesFieldMatrix));

        return;
      }
      console.log("target");
      console.log(store.getState().state);
    }
  });
};

export default setGameAction;
