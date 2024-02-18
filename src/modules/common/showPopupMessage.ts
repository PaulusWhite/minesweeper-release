const showPopupMessage = (messageText: string) => {
  const popup: HTMLDivElement = document.querySelector(".popup") as HTMLDivElement;
  const messageField: HTMLParagraphElement = popup.firstElementChild as HTMLParagraphElement;
  messageField.textContent = messageText;

  popup.classList.add("show-popup");

  setTimeout(() => {
    popup.classList.remove("show-popup");
  }, 5000);
};

export default showPopupMessage;
