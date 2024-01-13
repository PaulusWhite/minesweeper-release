//Modules
import createMineField from "../createMineField";
import setInitInfoFieldData from "../setInitInfoFieldData";

const rerenderMinesField = () => {
  createMineField();
  setInitInfoFieldData();
};

export default rerenderMinesField;
