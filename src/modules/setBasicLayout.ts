//Components
import GameWindow from "../components/GameWindow";
import SettingsSidebar from "../components/SettingsSidebar";

const setBasicLayout = () => {
  const body: HTMLBodyElement = document.body as HTMLBodyElement;

  body.innerHTML += GameWindow();
  body.innerHTML += SettingsSidebar();
};

export default setBasicLayout;
