//Components
import CloseBtn from "../common/CloseBtn";

const ProgressSavingSection = () => {
  const view = `
    <section class="progress-saving-section settings-section">
      <ul class="data-entry-list">
        <li class="data-entry-list__game" data-entry-game="1">
          <span class="data-entry-list__name"></span>
          <button class="data-entry-list__clearBtn">Clear</button>
          <button class="data-entry-list__saveBtn">Save</button>
        </li>

        <li class="data-entry-list__game" data-entry-game="2">
          <span class="data-entry-list__name"></span>
          <button class="data-entry-list__clearBtn">Clear</button>
          <button class="data-entry-list__saveBtn">Save</button>
        </li>

        <li class="data-entry-list__game" data-entry-game="3">
          <span class="data-entry-list__name"></span>
          <button class="data-entry-list__clearBtn">Clear</button>
          <button class="data-entry-list__saveBtn">Save</button>
        </li>

        <li class="data-entry-list__game" data-entry-game="4">
          <span class="data-entry-list__name"></span>
          <button class="data-entry-list__clearBtn">Clear</button>
          <button class="data-entry-list__saveBtn">Save</button>
        </li>

        <li class="data-entry-list__game" data-entry-game="5">
          <span class="data-entry-list__name"></span>
          <button class="data-entry-list__clearBtn">Clear</button>
          <button class="data-entry-list__saveBtn">Save</button>
        </li>
      </ul>

      ${CloseBtn("progress-saving-section__close-btn")}
    </section>
  `;

  return view;
};

export default ProgressSavingSection;
