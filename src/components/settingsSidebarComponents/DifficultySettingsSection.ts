//Components
import CloseBtn from "../common/CloseBtn";

const DifficultySettingsSection = () => {
  const view = `
    <section class="difficulty-settings settings-section">
      <table class="difficulty-settings__table">

        <tr class="values-names-list">
          <th class="values-names-list__value-name empty-value-name"></th>
          <th class="values-names-list__value-name">Width</th>
          <th class="values-names-list__value-name">Height</th>
          <th class="values-names-list__value-name">Mines</th>
        </tr>

        <tr class="easy-lvl">
          <th class="easy-lvl__difficulty-lvl-name">
            <input type="radio" name="difficulty" id="easy-lvl">
            <label for="easy-lvl">Beginner</label>
          </th>
          <th class="easy-lvl__row-cells-value">10</th>
          <th class="easy-lvl__column-cells-value">10</th>
          <th class="easy-lvl__mines-quantity-value">10</th>
        </tr>

        <tr class="medium-lvl">
          <th class="medium-lvl__difficulty-lvl-name">
            <input type="radio" name="difficulty" id="medium-lvl">
            <label for="medium-lvl">Intermediate</label>
          </th>
          <th class="medium-lvl__row-cells-value">15</th>
          <th class="medium-lvl__column-cells-value">15</th>
          <th class="medium-lvl__mines-quantity-value">35</th>
        </tr>

        <tr class="hard-lvl">
          <th class="hard-lvl__difficulty-lvl-name">
            <input type="radio" name="difficulty" id="hard-lvl">
            <label for="hard-lvl">Expert</label>
          </th>
          <th class="hard-lvl__row-cells-value">25</th>
          <th class="hard-lvl__column-cells-value">25</th>
          <th class="hard-lvl__mines-quantity-value">99</th>
        </tr>

        <tr class="custom-lvl">
          <th class="custom-lvl__difficulty-lvl-name">
            <input type="radio" name="difficulty" id="custom-lvl">
            <label for="custom-lvl">Custom</label>
          </th>
          <th class="custom-lvl__row-cells-value">
            <input class="custom-lvl__input-number" id="custom-lvl__row-cells-custom-value">
          </th>
          <th class="custom-lvl__column-cells-value">
            <input class="custom-lvl__input-number" id="custom-lvl__width-cells-custom-value">
          </th>
          <th class="custom-lvl__mines-quantity-value">
            <input class="custom-lvl__input-number" id="custom-lvl__mines-quantity-custom-value">
          </th>
        </tr>

      </table>

      <button class="difficulty-settings__apply-btn">Save</button>
      ${CloseBtn("difficulty-settings__close-btn")}
    </section>
  `;

  return view;
};

export default DifficultySettingsSection;
