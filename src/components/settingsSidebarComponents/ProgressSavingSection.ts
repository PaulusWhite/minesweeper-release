const ProgressSavingSection = () => {
  const view = `
    <section class="progress-saving-section">
      <button class="progress-saving-section__save-btn">Save game</button>

      <ul class="data-entry-list">
        <li class="data-entry-list" data-entry-game="1"></li>
        <li class="data-entry-list" data-entry-game="2"></li>
        <li class="data-entry-list" data-entry-game="3"></li>
        <li class="data-entry-list" data-entry-game="4"></li>
        <li class="data-entry-list" data-entry-game="5"></li>
      </ul>

    </section>
  `;

  return view;
};

export default ProgressSavingSection;
