import "./styles/index.scss";

import createStore from "./redux/createStore";

// Modules
import setGameSettings from "./modules/setGameSettings";
import setBasicLayout from "./modules/setBasicLayout";

setGameSettings();
const store = createStore();
setBasicLayout();

console.log(store.getState().state);
