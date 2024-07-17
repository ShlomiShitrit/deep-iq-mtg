import { atom } from "recoil";

export const aggroAtom = atom({
    key: "aggro", // unique ID (with respect to other atoms/selectors)
    default: 0, // default value (aka initial value)
});
