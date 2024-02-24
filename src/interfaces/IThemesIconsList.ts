interface IIconsList {
  mineIcon: string;
  timerIcon: string;
  flagIcon: string;
}

interface IThemesIconsList {
  default: IIconsList;
}

interface IEmojiIconList {
  default: string;
  lose: string;
  win: string;
}

export { IThemesIconsList, IEmojiIconList };
