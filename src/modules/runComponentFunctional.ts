//Modules
import setDifficultySettingsValue from "./setDifficultySettingsValue";

const runComponentFunctional = (url: "/difficulty") => {
  if (url === "/difficulty") {
    setDifficultySettingsValue();
  }
};

export default runComponentFunctional;
