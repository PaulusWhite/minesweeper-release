const hideSettingsSidebar = () => {
  const settingsMenu: HTMLElement = document.querySelector(".settings-sidebar") as HTMLElement;
  settingsMenu.classList.remove("show-sidebar");
};

export default hideSettingsSidebar;
