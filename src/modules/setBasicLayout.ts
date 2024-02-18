//Components
import GameWindow from "../components/GameWindow";
import SettingsSidebar from "../components/SettingsSidebar";
import Popup from "../components/common/Popup";

const setBasicLayout = () => {
  const body: HTMLBodyElement = document.body as HTMLBodyElement;

  body.innerHTML += GameWindow();
  body.innerHTML += SettingsSidebar();
  body.innerHTML += Popup();
};

export default setBasicLayout;
