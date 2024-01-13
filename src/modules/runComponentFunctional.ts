//Modules
import setDifficultySettingsInitValue from "./common/setDifficultySettingsInitValue";
import validateCustomDifficultyInput from "./validateCustomDifficultyInput";
import applyGameDifficulty from "./applyGameDifficulty";

const runComponentFunctional = (url: "/difficulty" | "/save" | "/load" | "/theme") => {
  if (url === "/difficulty") {
    setDifficultySettingsInitValue();
    validateCustomDifficultyInput();
    applyGameDifficulty();
  }
};

export default runComponentFunctional;
