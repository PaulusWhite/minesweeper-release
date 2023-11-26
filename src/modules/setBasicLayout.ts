// Components
import GameWindow from "../components/GameWindow";

const setBasicLayout = () => {
  const body = document.body;

  body.innerHTML += GameWindow();
};

export default setBasicLayout;
