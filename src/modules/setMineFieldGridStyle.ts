//Utils
import getMineFieldHTMLNode from "../utils/getMineFieldHTMLNode";

const setMineFieldGridStyle = (rowCellsQuantity: number, columnCellsQuantity: number) => {
  const gridStyles = {
    templateRows: columnCellsQuantity,
    templateColumns: rowCellsQuantity,
  };

  const mineField: HTMLDivElement = getMineFieldHTMLNode();

  mineField.style.gridTemplateRows = `repeat(${gridStyles.templateRows}, 1fr)`;
  mineField.style.gridTemplateColumns = `repeat(${gridStyles.templateColumns}, 1fr)`;
};

export default setMineFieldGridStyle;
