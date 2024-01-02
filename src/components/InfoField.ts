const InfoField = () => {
  const view = `
  <div class="info-field">

    <div class="info-field__level-info">
      <span class="info-field__bombs-info info-field__indicator">
        <span class="info-field__bomb-icon"></span>
        <span class="info-field__bombs-quantity"></span>
      </span>

      <button class="info-field__restart-btn info-field__indicator">restart</button>
      <button class="info-field__settings-btn info-field__indicator">Settings</button>
    </div>

    <div class="info_field__game-info">
      <span class="info-field__time-counter info-field__indicator">
        <span class="info-field__time-counter-icon"></span>
        <span class="info-field__time-counter-value"></span>
      </span>

      <span class="info-field__moves-counter info-field__indicator">
        moves
        <span class="info-field__moves-counter-value"></span>
      </span>

      <span class="info-field__flags-counter info-field__indicator">
        <span class="info-field__flags-counter-icon"></span>
        <span class="info-field__flags-counter-value"></span>
      </span>
    </div>
    
  </div>
  `;

  return view;
};

export default InfoField;
