//Modules
import rerenderMinesField from "./common/rerenderMinesField";

const restartGame = () => {
  const restartBtn: HTMLButtonElement = document.querySelector(".info-field__restart-btn") as HTMLButtonElement;

  restartBtn.addEventListener("click", () => {
    rerenderMinesField();
  });
};

export default restartGame;
