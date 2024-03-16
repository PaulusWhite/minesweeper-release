//Modules
import { setDifficultySettingsInitValue } from "./common/setDifficultySettingsInitValue";
import validateCustomDifficultyInput from "./validateCustomDifficultyInput";
import applyGameDifficulty from "./applyGameDifficulty";
import handleProgressRecords from "./handleProgressRecords";
import showLastResultsList from "./showLastResultsList";
import loadAssets from "./loadAssets";

const runComponentFunctional = (url: "/difficulty" | "/save" | "/load" | "/faq" | "/info" | "/last-results") => {
  loadAssets();
  
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
  if (url === "/last-results") {
    showLastResultsList();
  }
};

export default runComponentFunctional;
