// Interfaces
import { IState, IAction } from "../interfaces/IRedux";
// Modules
import createMinesFieldMatrix from "../modules/createMinesFieldMatrix";
// ActionTypes
import INIT from "./actionTypes";
// RootReducer
import rootReducer from "./rootReducer";

const createStore = () => {
  const initState = {
    state: createMinesFieldMatrix(),
  };

  let state: IState = rootReducer(initState, { type: INIT });
  const subscribers: CallableFunction[] = [];

  return {
    dispatch(action: IAction) {
      state = rootReducer(state, action);
      subscribers.forEach((subscriber) => subscriber());
    },
    subscribe(callback: CallableFunction) {
      subscribers.push(callback);
    },
    getState() {
      return state;
    },
  };
};

const store = createStore();

export default store;
