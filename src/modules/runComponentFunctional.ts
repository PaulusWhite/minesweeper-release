//Modules
import { setDifficultySettingsInitValue } from "./common/setDifficultySettingsInitValue";
import validateCustomDifficultyInput from "./validateCustomDifficultyInput";
import applyGameDifficulty from "./applyGameDifficulty";
import handleProgressRecords from "./handleProgressRecords";
import showLastResultsList from "./showLastResultsList";
import loadAssets from "./loadAssets";
import displayPopupMessage from "./common/displayPopupMessage";

const runComponentFunctional = (url: "/difficulty" | "/save" | "/load" | "/faq" | "/contacts" | "/last-results") => {
  loadAssets();
  displayPopupMessage(false);

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
