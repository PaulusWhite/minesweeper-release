const Theme = (id: string, name: string) => {
    const view = `
      <li class="themes-list__theme">
        <input type="radio" name="theme" id="${id}">
        <label for="${id}">${name}</label>
      </li>    
    `

    return view;
}

export default Theme;