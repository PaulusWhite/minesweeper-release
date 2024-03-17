const getCellColumnIndex = (serialNumber: number, rowCellsQuantity: number): number => {
  const cellsColumnIndex: number = Math.floor(serialNumber / rowCellsQuantity); // cells column of current cell

  return cellsColumnIndex;
};

export default getCellColumnIndex;
