//Interfaces
import ILastResult from "../interfaces/ILastResults";

//Modules
import getLastResultsData from "./common/getLastResultsData";

const LAST_RESULTS_DATA_NAME: string = "last-results";

const setGameLastResultsInitData = () => {
  const lastResultsData: ILastResult[] | null = getLastResultsData();

  if(!lastResultsData){
    localStorage.setItem(LAST_RESULTS_DATA_NAME, JSON.stringify([]));
  }
};

export default setGameLastResultsInitData;
