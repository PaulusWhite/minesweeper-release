const validateCustomDifficultyInput = () => {
  const numberInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(".custom-lvl__input-number");

  numberInputs.forEach((numberInput: HTMLInputElement) => {
    numberInput.addEventListener("paste", (Event: Event) => {
      Event.preventDefault();
    });

    numberInput.addEventListener("input", () => {
      let newValue: string = numberInput.value;

      if (!Number.isInteger(+newValue)) {
        newValue = newValue.slice(0, newValue.length - 1);
        numberInput.value = newValue;
      }
    });
  });
};

export default validateCustomDifficultyInput;
