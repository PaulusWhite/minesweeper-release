//Modules
import createMineField from "../createMineField";
import setInitInfoFieldData from "../setInitInfoFieldData";
import displayPreloader from "./displayPreloader";

const rerenderMinesField = () => {
  displayPreloader(true);

  return new Promise((resolve) => {
    setTimeout(() => {
      createMineField();
      setInitInfoFieldData();

      displayPreloader(false);

      resolve(true);
    }, 1001);
  });
};

export default rerenderMinesField;
