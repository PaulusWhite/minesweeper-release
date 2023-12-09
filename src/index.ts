/* eslint-disable @typescript-eslint/no-unused-vars */
import "./styles/index.scss";

// Modules
import setBasicLayout from "./modules/setBasicLayout";

// store
import store from "./redux/createStore";

setBasicLayout();

console.log(store.getState());
