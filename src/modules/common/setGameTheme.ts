//modules
import getGameSettingsData from "./getGameSettingsData";

const setGameTheme = () => {
  let theme = getGameSettingsData()?.theme;
  if (!theme) theme = "default";

  const body: HTMLBodyElement = document.body as HTMLBodyElement;
  body.id = theme;
};

export default setGameTheme;
