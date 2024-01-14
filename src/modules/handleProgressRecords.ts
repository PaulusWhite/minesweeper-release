//Modules
import getGameSettingsData from "./common/getGameSettingsData";

//Interfaces
import { IGameSettings } from "../interfaces/IGameSettings";

//Modules
import saveProgress from "./saveProgress";

const EMPTY_RECORD_NAME: string = "The Record is empty";

const handleProgressRecords = (listClass: "saved-games-list" | "data-entry-list") => {
  const settingsData: IGameSettings = getGameSettingsData() as IGameSettings;
  const { savedProgress } = settingsData;
  const savedRecords: NodeListOf<HTMLLIElement> = document.querySelectorAll(`.${listClass} .saved-record`);

  savedRecords.forEach((record: HTMLLIElement, index: number) => {
    const recordName: HTMLSpanElement = record.firstElementChild as HTMLSpanElement;
    const recordDataName: string | null = savedProgress[index].name;

    recordName.innerHTML = recordDataName ? recordDataName : EMPTY_RECORD_NAME;
  });

  if (listClass === "data-entry-list") saveProgress();
};

export default handleProgressRecords;
