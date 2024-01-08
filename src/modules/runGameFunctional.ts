//Modules
import setGameAction from "./setGameAction";
import displaySettingsSidebar from "./displaySettingsSidebar";
import setSidebarMenuRouter from "./setSidebarMenuRouter";

const runGameFunctional = () => {
  setGameAction();
  displaySettingsSidebar();
  setSidebarMenuRouter();
};

export default runGameFunctional;
