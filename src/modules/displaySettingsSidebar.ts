//Modules
import hideSettingsSidebar from "./common/hideSettingsSidebar";
import stopGameTimer from "./common/stopGameTimer";

const displaySettingsSidebar = () => {
  const displayBtn: HTMLButtonElement = document.querySelector(".info-field__settings-btn") as HTMLButtonElement;
  const closeBtn: HTMLButtonElement = document.querySelector(".settings-sidebar__close-btn") as HTMLButtonElement;
  const settingsMenu: HTMLElement = document.querySelector(".settings-sidebar") as HTMLElement;

  displayBtn.addEventListener("click", () => {
    settingsMenu.classList.add("show-sidebar");
    stopGameTimer();
  });

  closeBtn.addEventListener("click", () => {
    hideSettingsSidebar();
  });
};

export default displaySettingsSidebar;
