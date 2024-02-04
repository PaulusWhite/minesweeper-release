//Modules
import setDifficultySettingsInitValue from "./common/setDifficultySettingsInitValue";
import validateCustomDifficultyInput from "./validateCustomDifficultyInput";
import applyGameDifficulty from "./applyGameDifficulty";
import handleProgressRecords from "./handleProgressRecords";
import setGameThemeInitValue from "./setGameThemeInitValue";

const runComponentFunctional = (url: "/difficulty" | "/save" | "/load" | "/theme") => {
  if (url === "/difficulty") {
    setDifficultySettingsInitValue();
    validateCustomDifficultyInput();
    applyGameDifficulty();
  }
  if (url === "/load") {
    handleProgressRecords("saved-games-list");
  }
  if (url === "/save") {
    handleProgressRecords("data-entry-list");
  }
  if (url === "/theme") {
    setGameThemeInitValue();
  }
};

export default runComponentFunctional;
