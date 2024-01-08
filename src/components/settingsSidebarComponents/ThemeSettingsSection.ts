const ThemeSettingsSection = () => {
  const view = `
    <section class="theme-settings">
      <button class="theme-settings__btn">game theme</button>

      <ul class="themes-list">
        <li class="themes-list__default theme"></li>
        <li class="themes-list__construction theme"></li>
        <li class="themes-list__nature theme"></li>
        <li class="themes-list__weather theme"></li>
        <li class="themes-list__sea theme"></li>
      </ul>
    </section>
  `;

  return view;
};

export default ThemeSettingsSection;
