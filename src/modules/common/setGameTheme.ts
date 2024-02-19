//modules
import getGameSettingsData from "./getGameSettingsData";

//interfaces
import { TTheme } from "../../interfaces/IGameSettings";
import { IThemesIconsList } from "../../interfaces/IThemesIconsList";

//Icons
import defaultMineIcon from "../../icons/default/mineIcon.svg";
import defaultTimerIcon from "../../icons/default/timerIcon.svg";
import defaultFlagIcon from "../../icons/default/flagIcon.svg";

const THEMES_ICONS: IThemesIconsList = {
  default: {
    mineIcon: defaultMineIcon,
    timerIcon: defaultTimerIcon,
    flagIcon: defaultFlagIcon,
  },
};

const setThemeIcons = async (theme: TTheme) => {
  const mineImgIcon: HTMLImageElement = document.querySelector("#bomb-icon") as HTMLImageElement;
  const timerImgIcon: HTMLImageElement = document.querySelector("#timer-icon") as HTMLImageElement;
  const flagImgIcon: HTMLImageElement = document.querySelector("#flag-icon") as HTMLImageElement;

  const mineIconPath: string = THEMES_ICONS[theme as keyof IThemesIconsList].mineIcon;
  const timerIconPath: string = THEMES_ICONS[theme as keyof IThemesIconsList].timerIcon;
  const flagIconPath: string = THEMES_ICONS[theme as keyof IThemesIconsList].flagIcon;

  mineImgIcon.src = mineIconPath;
  mineImgIcon.alt = mineImgIcon.id;
  timerImgIcon.src = timerIconPath;
  timerImgIcon.alt = timerImgIcon.id;
  flagImgIcon.src = flagIconPath;
  flagImgIcon.alt = flagImgIcon.id;
};

const setGameTheme = () => {
  let theme = getGameSettingsData()?.theme;
  if (!theme) theme = "default";

  const body: HTMLBodyElement = document.body as HTMLBodyElement;
  body.id = theme;

  setThemeIcons(theme);
};

export default setGameTheme;
