//Modules
import displayPreloader from "./common/displayPreloader";

const loadAssets = () => {
  displayPreloader(true, false);

  const allImages: NodeListOf<HTMLImageElement> = document.querySelectorAll("img");
  let counter: number = 0;

  allImages.forEach((Img: HTMLImageElement) => {
    Img.addEventListener("load", () => {
      counter += 1;
      if (counter === allImages.length) displayPreloader(false);
    });
  });
};

export default loadAssets;
