//Components
import CloseBtn from "../common/CloseBtn";
import Theme from "../common/Theme";

const ThemeSettingsSection = () => {
  const view = `
    <section class="theme-settings settings-section">

      <ul class="themes-list">
        ${Theme("default", "default")}
        ${Theme("construction", "construction")}
        ${Theme("nature", "nature")}
        ${Theme("weather", "weather")}
        ${Theme("sea", "sea")}
      </ul>

      ${CloseBtn("theme-settings__close-btn")}
    </section>
  `;

  return view;
};

export default ThemeSettingsSection;
