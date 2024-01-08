const displaySettingsSidebar = () => {
  const displayBtn: HTMLButtonElement = document.querySelector(".info-field__settings-btn") as HTMLButtonElement;
  const closeBtn: HTMLButtonElement = document.querySelector(".settings-sidebar__close-btn") as HTMLButtonElement;
  const settingsMenu: HTMLElement = document.querySelector(".settings-sidebar") as HTMLElement;

  displayBtn.addEventListener("click", () => {
    settingsMenu.classList.add("show-sidebar");
  });

  closeBtn.addEventListener("click", () => {
    settingsMenu.classList.remove("show-sidebar");
  });
};

export default displaySettingsSidebar;
