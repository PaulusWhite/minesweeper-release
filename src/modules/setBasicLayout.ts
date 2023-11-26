// Components
import GameWindow from "../components/GameWindow";

const setBasicLayout = () => {
  const body: HTMLBodyElement = document.body as HTMLBodyElement;

  body.innerHTML += GameWindow();
};

export default setBasicLayout;
