//icons
import defaultIcon from "./../icons/defaulEmoji.svg";
import bombIcon from "./../icons/mineIcon.svg";
import timerIcon from "./../icons/timerIcon.svg";
import flagIcon from "./../icons/flagIcon.svg";

const InfoField = () => {
  const view = `
  <div class="info-field">

    <div class="info-field__level-info">
      <span class="info-field__bombs-info info-field__indicator">
        <span class="info-field__bomb-icon">
          <img src="${bombIcon}" class="info-field__icon" id="bomb-icon">
        </span>
        <span class="info-field__bombs-quantity"></span>
      </span>

      <button class="info-field__restart-btn info-field__indicator">Restart</button>
      <button class="info-field__settings-btn info-field__indicator">Settings</button>
    </div>

    <div class="info_field__game-info">
      <span class="info-field__time-counter info-field__indicator">
        <span class="info-field__time-counter-icon">
          <img src="${timerIcon}" class="info-field__icon" id="timer-icon">
        </span>
        <span class="info-field__time-counter-value"></span>
      </span>

      <span class="info-field__moves-counter info-field__indicator">
        Moves
        <span class="info-field__moves-counter-value"></span>
      </span>

      <span class="info-field__flags-counter info-field__indicator">
        <span class="info-field__flags-counter-icon">
          <img src="${flagIcon}" class="info-field__icon" id="flag-icon">
        </span>
        <span class="info-field__flags-counter-value"></span>
      </span>
    </div>

    <div class="info-field__emoji">
      <img src="${defaultIcon}" alt="lose-emoji" class="info-field__lose-emoji">
    </div>
    
  </div>
  `;

  return view;
};

export default InfoField;
