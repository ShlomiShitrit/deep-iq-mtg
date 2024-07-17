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
}
