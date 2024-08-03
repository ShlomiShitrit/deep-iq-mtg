import { StyleProp } from "react-native";

export type ObjectStates<T> = {
    [key: string]: T;
};

export type Orientation = "LANDSCAPE" | "PORTRAIT";

export type Children = {
    component: JSX.Element;
    spaceStyle: StyleProp<any>;
};

export type stateType<T> = {
    state: T;
    setState: React.Dispatch<React.SetStateAction<T>>;
};

export type Block = {
    title: string;
    count: number;
};

export type WideBlock = {
    title: string;
    blocks: Block[];
};

export type Card = {
    text: string;
    ct: number;
    cs: number | string;
    sorcery?: boolean;
};

export type Table = ObjectStates<ObjectStates<Card>>;
