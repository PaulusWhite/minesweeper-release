const ThemeSettingsSection = () => {
  const view = `
    <section class="theme-settings">
      <button class="theme-settings__btn">game theme</button>

      <div class="themes-list">
        <span class="themes-list__default theme"></span>
        <span class="themes-list__construction theme"></span>
        <span class="themes-list__nature theme"></span>
        <span class="themes-list__weather theme"></span>
        <span class="themes-list__sea theme"></span>
      </div>
    </section>
  `;

  return view;
};

export default ThemeSettingsSection;
