//Components
import CloseBtn from "../common/CloseBtn";
import SavedRecord from "../common/SavedRecord";

const ProgressSavingSection = () => {
  const view = `
    <section class="progress-saving-section settings-section">

      <ul class="data-entry-list">
        ${SavedRecord(0, "Save")}
        ${SavedRecord(1, "Save")}
        ${SavedRecord(2, "Save")}
        ${SavedRecord(3, "Save")}
        ${SavedRecord(4, "Save")}
      </ul>

      ${CloseBtn("progress-saving-section__close-btn")}
    </section>
  `;

  return view;
};

export default ProgressSavingSection;
