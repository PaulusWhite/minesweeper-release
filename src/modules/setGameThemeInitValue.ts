//Modules
import getGameSettingsData from "./common/getGameSettingsData";

const setGameThemeInitValue = () => {
  const currentThemeValue= getGameSettingsData()?.theme;

  const themeInputs: NodeListOf<HTMLInputElement> = document.getElementsByName("theme") as NodeListOf<HTMLInputElement>;

  themeInputs.forEach( (themeInput: HTMLInputElement) => {
    if(themeInput.id === currentThemeValue){
      themeInput.checked = true;
    }
  });
}

export default setGameThemeInitValue;