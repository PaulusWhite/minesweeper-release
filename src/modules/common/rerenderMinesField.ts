//Modules
import createMineField from "../createMineField";
import setInitInfoFieldData from "../setInitInfoFieldData";
import displayPreloader from "./displayPreloader";

const rerenderMinesField = () => {
  displayPreloader(true);

  setTimeout(() => {
    createMineField();
    setInitInfoFieldData();

    displayPreloader(false);
  }, 100);
};

export default rerenderMinesField;
