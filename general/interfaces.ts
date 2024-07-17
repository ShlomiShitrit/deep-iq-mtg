export interface CounterProps {
    initCount: number;
    name: string;
    isNegativeAllowed?: boolean;
}

export interface SmallGridProps {
    componentsArray: CounterProps[];
    Component: React.ComponentType<any>
}

