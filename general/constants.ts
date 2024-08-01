import { ObjectStates } from "@general/types";

export const PLAY_STATE: ObjectStates<string> = {
    card: "",
    ct: "",
    cs: "",
};

export const POPUP_STATE: ObjectStates<boolean> = {
    colors: false,
    card: false,
    ct: false,
    cs: false,
};

export const MANA_SYMBOLS = {
    black: "https://i.pinimg.com/originals/bb/d1/37/bbd137aadf95913a94071dd9375499a6.png",
    green: "https://i.pinimg.com/originals/75/9f/c5/759fc5f50877c0ce43881f89ba8c0e76.png",
    white: "https://i.pinimg.com/originals/c4/60/a9/c460a99f6d913854e12c899f991fd362.png",
    red: "https://i.pinimg.com/originals/52/0e/80/520e80ddf2746afb906193f758435a97.png",
    blue: "https://i.pinimg.com/originals/d8/45/a3/d845a36b60017bebce9b8592cc5a8e38.png",
};
