//Components
import LastResultRecord from "../components/settingsSidebarComponents/LastResultRecord";

//Modules
import getLastResultsData from "./common/getLastResultsData";

//Interfaces
import { ILastResultsData, ILastResultRecord } from "../interfaces/ILastResults";

const showLastResultsList = () => {
  const lastResultsData: ILastResultsData = getLastResultsData() as ILastResultsData;
  const lastResultsList: HTMLUListElement = document.querySelector(".last-results-list") as HTMLUListElement;

  lastResultsData.forEach((lastResultRecord: ILastResultRecord) => {
    lastResultsList.innerHTML += LastResultRecord(lastResultRecord);
  });

  // if(!lastResultsList.children){
  //   lastResultsList.innerHTML += "You do not have any results"
  // }
};

export default showLastResultsList;
