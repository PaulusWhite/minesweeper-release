interface IEmojiIconList {
  default: string;
  lose: string;
  win: string;
}

type TEmojiType = "default" | "lose" | "win";

export { IEmojiIconList, TEmojiType };
