//Modules
import setDifficultySettingsValue from "./setDifficultySettingsValue";

const runComponentFunctional = (url: "/difficulty" | "/save" | "/load" | "/theme") => {
  if (url === "/difficulty") {
    setDifficultySettingsValue();
  }
};

export default runComponentFunctional;
