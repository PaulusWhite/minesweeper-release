//modules
import getGameSettingsData from "./getGameSettingsData";

// const func = async() => {
//   const img = await import("./../../icons/default/mine.svg");
//   console.log(img)
// }

const setGameTheme = () => {
  let theme = getGameSettingsData()?.theme;
  if(!theme) theme = "default";

  const body: HTMLBodyElement = document.body as HTMLBodyElement;
  body.id = theme;

  // func()
};

export default setGameTheme;
