/* eslint-disable @typescript-eslint/no-unused-vars */
import "./styles/index.scss";

// Modules
import setBasicLayout from "./modules/setBasicLayout";
import setGameSettings from "./modules/setGameSettings";
import setMinesField from "./modules/setMinesField";

setGameSettings(); // init initial game settings
setBasicLayout();
setMinesField();
