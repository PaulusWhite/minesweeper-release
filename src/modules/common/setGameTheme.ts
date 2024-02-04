//modules
import getGameSettingsData from "./getGameSettingsData";

const setGameTheme = () => {
  const theme = getGameSettingsData()?.theme;

  const body: HTMLBodyElement = document.body as HTMLBodyElement;
  body.id = theme ? theme : "default";
}

export default setGameTheme;