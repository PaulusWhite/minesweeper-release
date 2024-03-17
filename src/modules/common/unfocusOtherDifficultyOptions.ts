//Modules
import { setRadioIndicator } from "./setDifficultySettingsInitValue";

const unfocusOtherDifficultyOptions = (input: HTMLInputElement) => {
  setRadioIndicator(input, true);
  input.checked = true;

  const allInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(`input[type="radio"]`);

  allInputs.forEach((anotherInput: HTMLInputElement) => {
    if (anotherInput !== input) setRadioIndicator(anotherInput, false);
  });
};

export default unfocusOtherDifficultyOptions;
