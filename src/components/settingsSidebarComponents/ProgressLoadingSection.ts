//Components
import CloseBtn from "../common/CloseBtn";

const ProgressLoadingSection = () => {
  const view = `
    <section class="progress-loading-section settings-section">
      <ul class="saved-games-list">
        <li class="saved-games-list__game" data-saved-game="1">
          <span class="saved-games-list__name"></span>
          <button class="saved-games-list__clearBtn">Clear</button>
          <button class="data-entry-list__loadBtn">Load</button>
        </li>

        <li class="saved-games-list__game" data-saved-game="2">
          <span class="saved-games-list__name"></span>
          <button class="saved-games-list__clearBtn">Clear</button>
          <button class="data-entry-list__loadBtn">Load</button>
        </li>

        <li class="saved-games-list__game" data-saved-game="3">
          <span class="saved-games-list__name"></span>
          <button class="saved-games-list__clearBtn">Clear</button>
          <button class="data-entry-list__loadBtn">Load</button>
        </li>

        <li class="saved-games-list__game" data-saved-game="4">
          <span class="saved-games-list__name"></span>
          <button class="saved-games-list__clearBtn">Clear</button>
          <button class="data-entry-list__loadBtn">Load</button>
        </li>

        <li class="saved-games-list__game" data-saved-game="5">
          <span class="saved-games-list__name"></span>
          <button class="saved-games-list__clearBtn">Clear</button>
          <button class="data-entry-list__loadBtn">Load</button>
        </li>
      </ul>
      
      ${CloseBtn("progress-loading-section__close-btn")}
    </section>
  `;

  return view;
};

export default ProgressLoadingSection;
