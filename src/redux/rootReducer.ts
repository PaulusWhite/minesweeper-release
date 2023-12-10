// Interfaces
import { IState, IAction, ICell } from "../interfaces/IRedux";

// Action Types
import { INIT, CREATE_MINES_FIELD_MATRIX } from "./actionTypes";

const rootReducer = <T>(state: IState, action: IAction<T>): IState => {
  if (action.type === INIT) {
    return state;
  }
  if (action.type === CREATE_MINES_FIELD_MATRIX) {
    const minesFieldMatrix: ICell[][] = action.payload as ICell[][];
    state.state = minesFieldMatrix;
  }

  return state;
};

export default rootReducer;
