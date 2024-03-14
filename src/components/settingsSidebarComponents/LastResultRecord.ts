//Interfaces
import { ILastResultRecord } from "../../interfaces/ILastResults";

const LastResultRecord = (lastResultRecordData: ILastResultRecord) => {
  const { difficulty } = lastResultRecordData;

  const view = `
  
  <li class="last-result-record">
    <span class="last-result-record__date">
      Date: ${lastResultRecordData.date}
    </span>

    <span class="game-info__moves">
      Moves: ${lastResultRecordData.moves}
    </span>

    <span class="game-info__time">
      Time: ${lastResultRecordData.moves}
    </span>

    <span class="lvl-info__size">
      Size: ${difficulty.rowCellsQuantity}x${difficulty.columnCellsQuantity}
    </span>

    <span class="lvl-info__difficulty">
      Difficulty: ${difficulty.lvlValue}
    </span>
  </li>
  `;

  return view;
};

export default LastResultRecord;
