//Components
import CloseBtn from "../common/CloseBtn";

const ProgressLoadingSection = () => {
  const view = `
    <section class="progress-loading-section settings-section">
      <button class="progress-loading-section__load-btn">Load Game</button>

      <ul class="saved-games-list">
        <li class="saved-games-list__game" data-saved-game="1"></li>
        <li class="saved-games-list__game" data-saved-game="2"></li>
        <li class="saved-games-list__game" data-saved-game="3"></li>
        <li class="saved-games-list__game" data-saved-game="4"></li>
        <li class="saved-games-list__game" data-saved-game="5"></li>
      </ul>
      
      ${CloseBtn("progress-loading-section__close-btn")}
    </section>
  `;

  return view;
};

export default ProgressLoadingSection;
