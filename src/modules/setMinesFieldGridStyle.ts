const setMinesFieldGridStyle = (rowCellsQuantity: number, columnCellsQuantity: number) => {
  const gridStyles = {
    templateRows: columnCellsQuantity,
    templateColumns: rowCellsQuantity,
  };

  const field: HTMLDivElement = document.querySelector(".field") as HTMLDivElement;

  field.style.gridTemplateRows = `repeat(${gridStyles.templateRows}, 1fr)`;
  field.style.gridTemplateColumns = `repeat(${gridStyles.templateColumns}, 1fr)`;
};

export default setMinesFieldGridStyle;
