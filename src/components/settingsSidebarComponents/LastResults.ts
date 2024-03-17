//Components
import CloseBtn from "../common/CloseBtn";

const LastResult = () => {
  const view = `
    <section class="last-result-section settings-section">
      <h1 class="last-result-section__heading-message">You do not have any results yet</h1>

      <ul class="last-results-list"></ul>
      
      ${CloseBtn("last-results-section__close-btn")}
    </section>
  `;

  return view;
};

export default LastResult;
