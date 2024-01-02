//Components
import DifficultySettingsSection from "./settingsSidebarComponents/DifficultySettingsSection";
import ThemeSettingsSection from "./settingsSidebarComponents/ThemeSettingsSection";

const SettingsSidebar = () => {
  const view = `
    <aside class="settings-sidebar">
      ${DifficultySettingsSection()}
      ${ThemeSettingsSection()}

      <section class="game-theme"></section>
    </aside>
  `;

  return view;
};

export default SettingsSidebar;
