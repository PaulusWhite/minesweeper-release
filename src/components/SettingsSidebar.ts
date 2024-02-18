import CloseBtn from "./common/CloseBtn";

const SettingsSidebar = () => {
  const view = `
    <aside class="settings-sidebar">
      <button class="progress-saving-section__save-btn settings-btn" data-url="/save">Save Game</button>
      <button class="progress-loading-section__load-btn settings-btn" data-url="/load">Load Game</button>
      <button class="difficulty-settings__btn settings-btn" data-url="/difficulty">Game Difficulty</button>
      <button class="FAQ-btn settings-btn" data-url="/faq">FAQ</button>
      <button class="info-btn settings-btn" data-url="/info">Information</button>

      ${CloseBtn("settings-sidebar__close-btn")}
    </aside>
  `;

  return view;
};

export default SettingsSidebar;
