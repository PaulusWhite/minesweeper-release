const showPopupMessage = (messageText: string, timer: number = 5000) => {
  const popup: HTMLDivElement = document.querySelector(".popup") as HTMLDivElement;
  const messageField: HTMLParagraphElement = popup.firstElementChild as HTMLParagraphElement;
  messageField.textContent = messageText;

  if (popup.classList.contains("show-popup")){
    popup.classList.remove("show-popup");
  }

  popup.classList.add("show-popup");

  setTimeout(() => {
    popup.classList.remove("show-popup");
  }, timer);
};

export default showPopupMessage;
