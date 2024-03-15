const POPUP_TIMER_NAME: string = "popupTimer";

const showPopupMessage = (messageText: string, timer: number = 5000) => {
  const popup: HTMLDivElement = document.querySelector(".popup") as HTMLDivElement;
  const messageField: HTMLParagraphElement = popup.firstElementChild as HTMLParagraphElement;
  messageField.textContent = messageText;

  if (popup.classList.contains("show-popup")) {
    const popupTimerIdValue: string | null = sessionStorage.getItem(POPUP_TIMER_NAME);

    if (popupTimerIdValue) {
      const popupTimerID: number = Number(popupTimerIdValue);
      sessionStorage.removeItem(POPUP_TIMER_NAME);

      clearInterval(popupTimerID);
    }

    popup.classList.remove("show-popup");
  }

  popup.classList.add("show-popup");

  const timerID = setTimeout(() => {
    popup.classList.remove("show-popup");
    sessionStorage.removeItem(POPUP_TIMER_NAME);
  }, timer);

  sessionStorage.setItem(POPUP_TIMER_NAME, `${timerID}`);
};

export default showPopupMessage;
