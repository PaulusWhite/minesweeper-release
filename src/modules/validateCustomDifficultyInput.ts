//Modules
import unfocusOtherDifficultyOptions from "./common/unfocusOtherDifficultyOptions";

const validateCustomDifficultyInput = () => {
  const numberInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(".custom-lvl__input-number");

  numberInputs.forEach((numberInput: HTMLInputElement) => {
    numberInput.addEventListener("paste", (Event: Event) => {
      Event.preventDefault();
    });

    numberInput.addEventListener("input", () => {
      let newValue: string = numberInput.value;

      if (!Number.isInteger(+newValue) || newValue.length > 4) {
        newValue = newValue.slice(0, newValue.length - 1);
        numberInput.value = newValue;
      }
    });

    numberInput.addEventListener("focus", () => {
      const customLvlInput: HTMLInputElement = document.querySelector("#custom-lvl")!;

      unfocusOtherDifficultyOptions(customLvlInput);
    });
  });
};

export default validateCustomDifficultyInput;
