// actions types
import { CREATE_MINES_FIELD_MATRIX } from "./actionTypes";

// Interfaces
import { ICell, IAction } from "../interfaces/IRedux";

const createMineFieldMatrixAction = <T>(mineFieldMatrix: ICell[][]): IAction<T> => ({
  type: CREATE_MINES_FIELD_MATRIX,
  payload: mineFieldMatrix as T,
});

export default createMineFieldMatrixAction;
