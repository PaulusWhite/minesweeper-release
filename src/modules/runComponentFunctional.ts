//Modules
import setDifficultySettingsInitValue from "./common/setDifficultySettingsInitValue";
import validateCustomDifficultyInput from "./validateCustomDifficultyInput";
import applyGameDifficulty from "./applyGameDifficulty";
import setSavedProgressDataSettings from "./setSavedProgressDataSettings";

const runComponentFunctional = (url: "/difficulty" | "/save" | "/load" | "/theme") => {
  if (url === "/difficulty") {
    setDifficultySettingsInitValue();
    validateCustomDifficultyInput();
    applyGameDifficulty();
  }
  if (url === "/load") {
    setSavedProgressDataSettings("saved-games-list");
  }
  if (url === "/save") {
    setSavedProgressDataSettings("data-entry-list");
  }
};

export default runComponentFunctional;
