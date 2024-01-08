import { navigateTo } from "../router";

const setSidebarMenuRouter = () => {
  const btns: NodeListOf<HTMLButtonElement> = document.querySelectorAll(".settings-sidebar .settings-btn");

  btns.forEach((btn: HTMLButtonElement) => {
    const url: string = btn.dataset.url as string;

    btn.addEventListener("click", () => {
      navigateTo(url);
    });
  });
};

export default setSidebarMenuRouter;
