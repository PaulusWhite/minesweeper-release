//Components
import DifficultySettingsSection from "./components/settingsSidebarComponents/DifficultySettingsSection";
import ProgressLoadingSection from "./components/settingsSidebarComponents/ProgressLoadingSection";
import ProgressSavingSection from "./components/settingsSidebarComponents/ProgressSavingSection";
import ThemeSettingsSection from "./components/settingsSidebarComponents/ThemeSettingsSection";

//Interfaces
import IRouter from "./interfaces/IRouter";

//Modules
import runGameFunctional from "./modules/runGameFunctional";

const removeSettingsSection = () => {
  const settingsSection: HTMLElement | null = document.querySelector(".settings-section");

  if (settingsSection) settingsSection.remove();
};

const closeSettingsSection = () => {
  const closeBtn: HTMLButtonElement = document.querySelector(".settings-section .close-btn") as HTMLButtonElement;

  closeBtn.addEventListener("click", () => {
    window.history.pushState(null, "", "/");
    removeSettingsSection();
    runGameFunctional();
  });
};

const router = () => {
  const routers: IRouter[] = [
    { path: "/save", view: ProgressSavingSection() },
    { path: "/load", view: ProgressLoadingSection() },
    { path: "/difficulty", view: DifficultySettingsSection() },
    { path: "/theme", view: ThemeSettingsSection() },
  ];

  const currentPath: string = window.location.pathname;
  let isMatch = false;

  routers.forEach((route: IRouter) => {
    if (route.path === currentPath) {
      isMatch = true;
      removeSettingsSection();
      document.body.innerHTML += route.view;
      closeSettingsSection();
    }
  });

  if (!isMatch) {
    window.history.pushState(null, "", "/");
    removeSettingsSection();
  }
};

const navigateTo = (url: string) => {
  window.history.pushState(null, "", url);
  router();
};

export { router, navigateTo };
