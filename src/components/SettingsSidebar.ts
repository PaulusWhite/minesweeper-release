import CloseBtn from "./CloseBtn";

const SettingsSidebar = () => {
  const view = `
    <aside class="settings-sidebar">
      <button class="progress-saving-section__save-btn settings-btn">Save Game</button>
      <button class="progress-loading-section__load-btn settings-btn">Load Game</button>
      <button class="difficulty-settings__btn settings-btn">Game Difficulty</button>
      <button class="theme-settings__btn settings-btn">Game Theme</button>
      <button class="FAQ-btn settings-btn">FAQ</button>
      <button class="info-btn settings-btn">Information</button>

      ${CloseBtn("settings-sidebar__close-btn")}
    </aside>
  `;

  return view;
};

export default SettingsSidebar;
