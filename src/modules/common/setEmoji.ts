//Icons
import defaultEmoji from "./../../icons/defaulEmoji.svg";
import loseEmoji from "./../../icons/lose.svg";
import winEmoji from "./../../icons/win.svg";

//interfaces
import { IEmojiIconList, TEmojiType } from "../../interfaces/IThemeIconsList";

const EMOJI: IEmojiIconList = {
  default: defaultEmoji,
  lose: loseEmoji,
  win: winEmoji,
};

const setEmoji = (emojiType: TEmojiType) => {
  const emoji: HTMLImageElement = document.querySelector(".info-field__status-emoji")!;

  emoji.src = EMOJI[emojiType as keyof IEmojiIconList];
  emoji.id = emojiType;
};

export default setEmoji;
