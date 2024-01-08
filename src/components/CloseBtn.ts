const CloseBtn = (btnClassName: string) => {
  const view = `
    <button class="${btnClassName} close-btn">
      <span class="close-btn__crossbar-one"></span>
      <span class="close-btn__crossbar-two"></span>
    </button>
  `;

  return view;
};

export default CloseBtn;
