/* eslint-disable @typescript-eslint/no-unused-vars */
import "./styles/index.scss";

// Modules
import setBasicLayout from "./modules/setBasicLayout";
import setGameSettings from "./modules/setGameSettings";
import createMinesField from "./modules/createMinesField";

import store from "./redux/createStore";
setGameSettings(); // init initial game settings
setBasicLayout();
createMinesField();

console.log(store.getState().state);
