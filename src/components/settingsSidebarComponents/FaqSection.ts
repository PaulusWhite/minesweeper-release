//Components
import CloseBtn from "../common/CloseBtn";

//Img
import exampleImg from "./../../img/faqexample.webp";

const FaqSection = () => {
  const view = `
    <section class="faq-section settings-section">
      <h1 class="faq-section__heading">Minesweeper Rules</h1>

      <div class="faq-section__description">
        <div class="faq-section__text">
          <p>Minesweeper is a game where mines are hidden in a grid of squares. Safe squares have numbers telling you how many mines touch the square. You can use the number clues to solve the game by opening all of the safe squares. If you click on a mine you lose the game!</p>

          <p>Our Minesweeper always makes the first click safe. You open squares with the left mouse button and put flags on mines with the right mouse button. Pressing the right mouse button again changes your flag into a questionmark. When you open a square that does not touch any mines, it will be empty and the adjacent squares will automatically open in all directions until reaching squares that contain numbers. A common strategy for starting games is to randomly click until you get a big opening with lots of numbers.</p>
    
          <p>The three difficulty levels are Beginner (10x10 with 10 mines), Intermediate (15x15 with 35 mines) and Expert (25x25 with 99 mines). The game ends when all safe squares have been opened. </p>
    
          <p>You also can play Custom games up to 1600 squares with a minimum of 10 mines and maximum of (x-1)(y-1) mines.</p>
    
          <p>Above the grid you can see game timer, mines quantity, moves counter and flags counter.</p>
        </div>

        <figure class="faq-section__img-frame">
          <img src="${exampleImg}" alt="game-example" class="faq-section__game-img">
        </figure>
      </div>

      ${CloseBtn("faq-section__close-btn")}
    </section>
  `;
  return view;
};

export default FaqSection;
