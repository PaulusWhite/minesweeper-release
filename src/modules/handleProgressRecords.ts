//Modules
import getGameSettingsData from "./common/getGameSettingsData";
import loadGameProgress from "./loadGameProgress";

//Interfaces
import { IGameSettings, ISavedGame } from "../interfaces/IGameSettings";

//Modules
import saveGameProgress from "./saveGameProgress";
import setGameSettingsData from "./common/setGameSettingsData";

const EMPTY_RECORD_NAME: string = "Empty";

const removeGameRecord = (record: HTMLLIElement, recordName: HTMLSpanElement) => {
  const recordId: number = +(record.dataset.savedRecordId as string);
  const currentGameSettings: IGameSettings = getGameSettingsData() as IGameSettings;
  const savedProgress: (ISavedGame | null)[] = currentGameSettings.savedProgress;
  savedProgress[recordId] = null;

  setGameSettingsData({ ...currentGameSettings, savedProgress });

  recordName.innerHTML = EMPTY_RECORD_NAME;
};

const handleProgressRecords = (listClass: "saved-games-list" | "data-entry-list") => {
  const settingsData: IGameSettings = getGameSettingsData() as IGameSettings;
  const { savedProgress } = settingsData;
  const savedRecords: NodeListOf<HTMLLIElement> = document.querySelectorAll(`.${listClass} .saved-record`);

  savedRecords.forEach((record: HTMLLIElement, index: number) => {
    const recordName: HTMLSpanElement = record.firstElementChild as HTMLSpanElement;
    const recordDataName: string | null | undefined = savedProgress[index]?.name;
    const clearBtn: HTMLButtonElement = record.children[1] as HTMLButtonElement;

    recordName.innerHTML = recordDataName ? recordDataName : EMPTY_RECORD_NAME;

    clearBtn.addEventListener("click", () => removeGameRecord(record, recordName));
  });

  if (listClass === "data-entry-list") saveGameProgress();
  if (listClass === "saved-games-list") loadGameProgress();
};

export default handleProgressRecords;
