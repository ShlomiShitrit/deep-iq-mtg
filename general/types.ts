import { StyleProp } from "react-native";

export type ObjectStates<T> = {
    [key: string]: T;
};

export type Orientation = "LANDSCAPE" | "PORTRAIT";

export type Children = {
    component: JSX.Element;
    spaceStyle: StyleProp<any>;
};
