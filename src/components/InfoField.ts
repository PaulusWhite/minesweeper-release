const InfoField = () => {
  const view = `
  <div class="info-field">

    <div class="info-field__level-info">
      <span class="info-field__bombs-amount info-field__indicator">10</span>
      <span class="info-field__game-layout info-field__indicator">15 x 15</span>
      <button class="info-field__restart-btn info-field__indicator">restart</button>
    </div>

    <div class="info_field__game-info">
      <span class="info-field__time-counter info-field__indicator">00.00</span>
      <span class="info-field__moves-counter info-field__indicator">0</span>
      <span class="info-field__flags-counter info-field__indicator">0</span>
    </div>

  </div>
  `;

  return view;
};

export default InfoField;
