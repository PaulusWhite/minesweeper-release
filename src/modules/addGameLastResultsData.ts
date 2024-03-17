//Modules
import getLastResultsData from "./common/getLastResultsData";

//Interfaces
import { ILastResultRecord, ILastResultsData } from "../interfaces/ILastResults";

const LAST_RESULTS_DATA_NAME: string = "last-results";
const MAX_RECORDS_QUANTITY: number = 10;

const addGameLastResultsDataRecord = (newResultData: ILastResultRecord) => {
  const lastResultsData: ILastResultsData = getLastResultsData() as ILastResultsData;

  lastResultsData.push(newResultData);

  if (lastResultsData.length > MAX_RECORDS_QUANTITY) lastResultsData.shift();

  localStorage.setItem(LAST_RESULTS_DATA_NAME, JSON.stringify(lastResultsData));
};

export default addGameLastResultsDataRecord;
