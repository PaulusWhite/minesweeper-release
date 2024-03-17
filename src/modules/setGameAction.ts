//Modules
import setMobileGameAction from "./common/setMobileGameAction";
import setDesktopGameAction from "./common/setDesktopGameAction";

const setGameAction = () => {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)
  ) {
    setMobileGameAction();
  } else setDesktopGameAction();
};

export default setGameAction;
