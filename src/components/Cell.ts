const Cell = (index: number) => {
  const view = `
  <span class="cell" data-cell-index="${index}"></span>
  `;

  return view;
};

export default Cell;
