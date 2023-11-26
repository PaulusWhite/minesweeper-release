interface ICell {
  isMined: boolean;
  isFlag: boolean;
  minesAround: number;
  serialNumber: number;
}

interface IState {
  state: ICell[][];
}

interface IAction {
  type: string;
  payload?: number;
}

export { ICell, IState, IAction };
