//Icons
import defaultEmoji from "./../../icons/defaulEmoji.svg";
import loseEmoji from "./../../icons/lose.svg";
import winEmoji from "./../../icons/win.svg";

//interfaces
import { IEmojiIconList } from "../../interfaces/IThemesIconsList";

const EMOJI: IEmojiIconList = {
  default: defaultEmoji,
  lose: loseEmoji,
  win: winEmoji,
};

const setEmoji = (emojiType: "default" | "lose" | "win") => {
  const emoji: HTMLImageElement = document.querySelector(".info-field__lose-emoji")!;

  emoji.src = EMOJI[emojiType as keyof IEmojiIconList];
};

export default setEmoji;
