//Modules
import getGameSettingsData from "./common/getGameSettingsData";

//Interfaces
import { IGameSettings } from "../interfaces/IGameSettings";
import { ICell } from "../interfaces/IRedux";

const loadGameProgress = () => {
  const progressList: HTMLUListElement = document.querySelector(".saved-games-list") as HTMLUListElement;

  progressList.addEventListener("click", (event: Event) => {
    const target: HTMLElement = event.target as HTMLElement;

    if (target.className === "saved-record__load-btn") {
      const gameSettingsData: IGameSettings = getGameSettingsData() as IGameSettings;

      const record: HTMLLIElement = target.parentElement as HTMLLIElement;
      const recordId: number = +(record.dataset.savedRecordId as string);

      const recordState: ICell[][] | null = gameSettingsData.savedProgress[recordId].state;

      if (recordState === null) {
        console.log("The record is empty");
        return;
      }

      // rerenderMinesField();
    }
  });
};

export default loadGameProgress;
