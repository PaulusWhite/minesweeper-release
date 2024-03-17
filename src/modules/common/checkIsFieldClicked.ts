//store
import store from "../../redux/createStore";

const checkIsFieldClicked = (): boolean => {
  const isState = store.getState().state.length;

  return !isState;
};

export default checkIsFieldClicked;
