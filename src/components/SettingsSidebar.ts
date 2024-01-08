const SettingsSidebar = () => {
  const view = `
    <aside class="settings-sidebar">
      <button class="difficulty-settings__btn">game difficulty</button>
      <button class="theme-settings__btn">game theme</button>
      <button class="progress-saving-section__save-btn">Save game</button>
      <button class="progress-loading-section__load-btn">Load Game</button>
      <button class="FAQ-btn"></button>
      <button class="info-btn"></button>
    </aside>
  `;

  return view;
};

export default SettingsSidebar;
