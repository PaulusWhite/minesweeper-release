//Interfaces
import ILastResult from "../../interfaces/ILastResults";

const LAST_RESULTS_DATA_NAME: string = "last-results";

const getLastResultsData = (): ILastResult[] | null => {
  const lastResultsData: string | null = localStorage.getItem(LAST_RESULTS_DATA_NAME);

  return lastResultsData ? JSON.parse(lastResultsData) : null;
};

export default getLastResultsData;
