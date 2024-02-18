//Modules
import resumeTimer from "./resumeTimer";

const hideSettingsSidebar = () => {
  const settingsMenu: HTMLElement = document.querySelector(".settings-sidebar") as HTMLElement;
  settingsMenu.classList.remove("show-sidebar");
  
  resumeTimer();
};

export default hideSettingsSidebar;
