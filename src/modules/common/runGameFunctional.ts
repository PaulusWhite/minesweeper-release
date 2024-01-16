//Modules
import setGameAction from "../setGameAction";
import displaySettingsSidebar from "../displaySettingsSidebar";
import setSidebarMenuRouter from "../setSidebarMenuRouter";
import restartGame from "../restartGame";

const runGameFunctional = () => {
  setGameAction();
  displaySettingsSidebar();
  setSidebarMenuRouter();
  restartGame();
};

export default runGameFunctional;
