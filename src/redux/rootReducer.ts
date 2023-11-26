// Interfaces
import { IState, IAction } from "../interfaces/IRedux";

// Action Types
import INIT from "./actionTypes";

const rootReducer = (state: IState, action: IAction): IState => {
  if (action.type === INIT) {
    return state;
  }

  return state;
};

export default rootReducer;
