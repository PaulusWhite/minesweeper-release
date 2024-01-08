const ProgressLoadingSection = () => {
  const view = `
    <section class="progress-loading-section">
      <button class="progress-loading-section__load-btn">Load Game</button>

      <ul class="saved-games-list">
        <li class="saved-games-list__game" data-saved-game="1"></li>
        <li class="saved-games-list__game" data-saved-game="2"></li>
        <li class="saved-games-list__game" data-saved-game="3"></li>
        <li class="saved-games-list__game" data-saved-game="4"></li>
        <li class="saved-games-list__game" data-saved-game="5"></li>
      </ul>
      
    </section>
  `;

  return view;
};

export default ProgressLoadingSection;
