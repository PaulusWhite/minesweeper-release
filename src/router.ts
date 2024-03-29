//Components
import DifficultySettingsSection from "./components/settingsSidebarComponents/DifficultySettingsSection";
import ProgressLoadingSection from "./components/settingsSidebarComponents/ProgressLoadingSection";
import ProgressSavingSection from "./components/settingsSidebarComponents/ProgressSavingSection";
import FaqSection from "./components/settingsSidebarComponents/FaqSection";
import InfoSection from "./components/settingsSidebarComponents/InfoSection";
import LastResult from "./components/settingsSidebarComponents/LastResults";

//Interfaces
import IRouter from "./interfaces/IRouter";

//Modules
import runGameFunctional from "./modules/common/runGameFunctional";
import runComponentFunctional from "./modules/runComponentFunctional";
import hideSettingsSidebar from "./modules/common/hideSettingsSidebar";

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
    { path: "/faq", view: FaqSection() },
    { path: "/contacts", view: InfoSection() },
    { path: "/last-results", view: LastResult() },
  ];

  const currentPath: string = window.location.pathname;
  let isMatch = false;

  routers.forEach((route: IRouter) => {
    if (route.path === currentPath) {
      isMatch = true;
      removeSettingsSection();
      document.body.innerHTML += route.view;
      closeSettingsSection();
      runComponentFunctional(route.path);
    }
  });

  if (!isMatch) {
    window.history.pushState(null, "", "/");
    removeSettingsSection();
  }
};

const navigateTo = (url: string) => {
  window.history.pushState(null, "", url);

  if (url === "/") {
    hideSettingsSidebar();
    removeSettingsSection();
    runGameFunctional();

    return;
  }

  router();
};

export { router, navigateTo };
