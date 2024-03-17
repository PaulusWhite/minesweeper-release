import { ICell } from "./IRedux";

interface IRevealNextCellsData {
  cell: ICell;
  fieldMatrix: ICell[][];
  rowCellsQuantity: number;
  prevRevealedNextCellsMap?: Map<number, ICell>;
}

export default IRevealNextCellsData;
