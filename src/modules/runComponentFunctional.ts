//Modules
import setDifficultySettingsInitValue from "./setDifficultySettingsInitValue";
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
