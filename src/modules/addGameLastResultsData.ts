//Modules
import getLastResultsData from "./common/getLastResultsData";

//Interfaces
import ILastResult from "../interfaces/ILastResults";

const LAST_RESULTS_DATA_NAME: string = "last-results";

const addGameLastResultsDataRecord = (resultData: ILastResult) => {
  const lastResultsData: ILastResult[] = getLastResultsData() as ILastResult[];

  lastResultsData.push(resultData);

  if (lastResultsData.length > 10) lastResultsData.shift();

  localStorage.setItem(LAST_RESULTS_DATA_NAME, JSON.stringify(lastResultsData));
};

export default addGameLastResultsDataRecord;
