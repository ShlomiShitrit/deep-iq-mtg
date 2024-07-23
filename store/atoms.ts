import { atom } from "recoil";

export const aggroAtom = atom<number>({
    key: "aggro",
    default: 0,
});

export const libraryAtom = atom<string[]>({
    key: "library",
    default: [],
});
