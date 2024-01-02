//Interfaces
import { IState, IAction, ICell } from "../interfaces/IRedux";

//Action Types
import { INIT, CREATE_MINES_FIELD_MATRIX } from "./actionTypes";

const rootReducer = <T>(state: IState, action: IAction<T>): IState => {
  if (action.type === INIT) return state;

  if (action.type === CREATE_MINES_FIELD_MATRIX) {
    const mineFieldMatrix: ICell[][] = action.payload as ICell[][];
    state.state = mineFieldMatrix;
  }

  return state;
};

export default rootReducer;
