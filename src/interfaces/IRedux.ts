interface ICell {
  isMined: boolean;
  isFlag: boolean;
  isOpened: boolean;
  minesAround: number;
  serialNumber: number;
}

interface IState {
  state: ICell[][];
}

interface IAction<T> {
  type: string;
  payload?: T;
}

export { ICell, IState, IAction };
