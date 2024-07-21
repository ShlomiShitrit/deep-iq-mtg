import React from "react";
import { StyleProp } from "react-native";
import { Children, ObjectStates, stateType } from "@general/types";

export interface CounterProps {
    initCount: number;
    name: string;
    color?: string;
    isNegativeAllowed?: boolean;
    isAggro?: boolean;
}

export interface SmallGridProps {
    componentsArray: CounterProps[];
    Component: React.ComponentType<any>;
}

export interface CustomButtonProps {
    title: string;
    onPress: () => void;
    size?: "sm" | "md" | "lg";
    color?: string;
}

export interface ColorPickerProps {
    selectedColors: string[];
    onColorSelect: (color: string) => void;
}

export interface PopupProps {
    visible: boolean;
    onClose: () => void;
    children?: React.ReactNode;
    message: string;
    title: string;
}

export interface SectionProps {
    children: Children[];
    style: StyleProp<any>;
}

interface PopAndPlay {
    currentPlay: stateType<ObjectStates<string>>;
    openPopup: stateType<ObjectStates<boolean>>;
}

export interface LeftSectionProps extends PopAndPlay {}

export interface RightSectionProps {
    openPopup: stateType<ObjectStates<boolean>>;
}

export interface PopupGridProps extends PopAndPlay {
    selectedColors: stateType<string[]>;
}
