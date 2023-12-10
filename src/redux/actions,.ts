// actions types
import { CREATE_MINES_FIELD_MATRIX } from "./actionTypes";

// Interfaces
import { ICell, IAction } from "../interfaces/IRedux";

const createMinesFieldMatrixAction = <T>(minesFieldMatrix: ICell[][]): IAction<T> => ({
  type: CREATE_MINES_FIELD_MATRIX,
  payload: minesFieldMatrix as T,
});

export default createMinesFieldMatrixAction;
