/* eslint-disable @typescript-eslint/no-unused-vars */
import "./styles/index.scss";

// Modules
import setBasicLayout from "./modules/setBasicLayout";
import setGameSettings from "./modules/setGameSettings";
import createMineField from "./modules/createMineField";
import setGameAction from "./modules/setGameAction";

setGameSettings(); // init initial game settings
setBasicLayout();
createMineField();
setGameAction();
