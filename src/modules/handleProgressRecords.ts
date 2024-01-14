//Modules
import getGameSettingsData from "./common/getGameSettingsData";
import loadGameProgress from "./loadGameProgress";

//Interfaces
import { IGameSettings } from "../interfaces/IGameSettings";

//Modules
import saveGameProgress from "./saveGameProgress";

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

  if (listClass === "data-entry-list") saveGameProgress();
  if (listClass === "saved-games-list") loadGameProgress();
};

export default handleProgressRecords;
