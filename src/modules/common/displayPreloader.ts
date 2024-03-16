const displayPreloader = (display: boolean, transparent: boolean = true) => {
  const preloader: HTMLDivElement = document.querySelector(".preloader")!;

  console.log(transparent)

  if(display){
    preloader.classList.add("show-preloader");

    if(transparent){
      preloader.classList.add("show-preloader__transparent");
    }else preloader.classList.add("show-preloader__filled");
  }else{
    preloader.classList.remove("show-preloader");
    preloader.classList.remove("show-preloader__transparent");
    preloader.classList.remove("show-preloader__filled");
  }
};

export default displayPreloader;
