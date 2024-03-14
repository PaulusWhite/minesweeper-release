import InfoField from "./InfoField";

const GameWindow = () => {
  const view = `

  <div class="game-window__wrapper">
    <div class="game-window">
      ${InfoField()}
      <div class="field"></div>
    </div>
  </div>
  `;

  return view;
};

export default GameWindow;
