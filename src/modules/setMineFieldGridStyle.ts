const setMineFieldGridStyle = (rowCellsQuantity: number, columnCellsQuantity: number) => {
  const gridStyles = {
    templateRows: columnCellsQuantity,
    templateColumns: rowCellsQuantity,
  };

  const mineField: HTMLDivElement = document.querySelector(".field") as HTMLDivElement;

  mineField.style.gridTemplateRows = `repeat(${gridStyles.templateRows}, 1fr)`;
  mineField.style.gridTemplateColumns = `repeat(${gridStyles.templateColumns}, 1fr)`;
};

export default setMineFieldGridStyle;
