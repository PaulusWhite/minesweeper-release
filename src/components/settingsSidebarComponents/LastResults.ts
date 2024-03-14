//Components
import CloseBtn from "../common/CloseBtn";

const LastResult = () => {
  const view = `
    <section class="last-result-section settings-section">
      <h1>Last Results Info:</h1>

      <ul class="last-results-list"></ul>
      
      ${CloseBtn("last-results-section__close-btn")}
    </section>
  `;

  return view;
};

export default LastResult;
