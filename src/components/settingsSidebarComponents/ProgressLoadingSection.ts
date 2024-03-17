//Components
import CloseBtn from "../common/CloseBtn";
import SavedRecord from "../common/SavedRecord";

const ProgressLoadingSection = () => {
  const view = `
    <section class="progress-loading-section settings-section">

      <ul class="saved-games-list">
        ${SavedRecord(0, "Load")}
        ${SavedRecord(1, "Load")}
        ${SavedRecord(2, "Load")}
        ${SavedRecord(3, "Load")}
        ${SavedRecord(4, "Load")}
      </ul>
      
      ${CloseBtn("progress-loading-section__close-btn")}
    </section>
  `;

  return view;
};

export default ProgressLoadingSection;
