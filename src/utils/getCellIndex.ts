const getCellIndex = (serialNumber: number, rowCellsQuantity: number) => {
  const mineIndex: number = serialNumber % rowCellsQuantity;

  return mineIndex;
};

export default getCellIndex;
