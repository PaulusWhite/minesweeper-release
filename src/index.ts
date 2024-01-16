/* eslint-disable @typescript-eslint/no-unused-vars */
import "./styles/index.scss";

//Router
import { router } from "./router";

//Modules
import setBasicLayout from "./modules/setBasicLayout";
import setGameSettings from "./modules/setGameSettings";
import createMineField from "./modules/createMineField";
import setGameAction from "./modules/setGameAction";
import setInitInfoFieldData from "./modules/setInitInfoFieldData";
import displaySettingsSidebar from "./modules/displaySettingsSidebar";
import setSidebarMenuRouter from "./modules/setSidebarMenuRouter";
import restartGame from "./modules/restartGame";

setGameSettings(); // init initial game settings
setBasicLayout();
createMineField();
setGameAction();
setInitInfoFieldData();
displaySettingsSidebar();
setSidebarMenuRouter();
restartGame();
router();
