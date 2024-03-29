//Components
import GameWindow from "../components/GameWindow";
import SettingsSidebar from "../components/SettingsSidebar";
import Popup from "../components/common/Popup";
import Preloader from "../components/Preloader";

const setBasicLayout = () => {
  const body: HTMLBodyElement = document.body as HTMLBodyElement;

  body.innerHTML += GameWindow();
  body.innerHTML += SettingsSidebar();
  body.innerHTML += Popup();
  body.innerHTML += Preloader();
};

export default setBasicLayout;
