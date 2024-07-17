export interface CounterProps {
    initCount: number;
    name: string;
    color?: string;
    isNegativeAllowed?: boolean;
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
    selectedColors: string[];
    onColorSelect: (color: string) => void;
  }