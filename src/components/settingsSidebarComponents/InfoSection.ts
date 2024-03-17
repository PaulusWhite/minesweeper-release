//Components
import CloseBtn from "../common/CloseBtn";

//Icons
import smileIcon from "./../../icons/smile.svg";

const InfoSection = () => {
  const view = `
    <section class="info-section settings-section">
      <h1>My Contacts <img src="${smileIcon}" alt="smile-icon"></h1> 
      
      <ul class="info-section__contact-list">
        <li class="info-section__contact">
          - <a href="https://www.linkedin.com/in/exactlypaul/" target="_blank"> My LinkedIn </a>
        </li>
        <li class="info-section__contact">- 
          <a href="https://github.com/PaulusWhite" target="_blank"> My GitHub </a> 
        </li>
        <li class="info-section__contact email-contact">- My email: exactlypaulus@gmail.com</li>
      </div>

      ${CloseBtn("info-section__close-btn")}
    </section>
  `;

  return view;
};

export default InfoSection;
