//Modules
import setDifficultySettingsInitValue from "./setDifficultySettingsInitValue";

const runComponentFunctional = (url: "/difficulty" | "/save" | "/load" | "/theme") => {
  if (url === "/difficulty") {
    setDifficultySettingsInitValue();
  }
};

export default runComponentFunctional;
