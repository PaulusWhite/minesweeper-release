const POPUP_TIMER_NAME: string = "popupTimer";

const displayPopupMessage = (messageText: string | false, timer: number = 3500) => {
  const popup: HTMLDivElement = document.querySelector(".popup") as HTMLDivElement;
  const messageField: HTMLParagraphElement = popup.firstElementChild as HTMLParagraphElement;

  if(!messageText) {
    popup.classList.remove("show-popup");
    return;
  }

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

export default displayPopupMessage;
