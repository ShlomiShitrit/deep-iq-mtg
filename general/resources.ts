import { CounterProps } from "@general/interfaces";
export const COUNTERS: CounterProps[] = [
    {
        initCount: 40,
        name: "Life",
    },
    {
        initCount: 0,
        name: "Aggro",
        isNegativeAllowed: true,
        color: "#ff6f00",
    },
    {
        initCount: 0,
        name: "CT",
        color: "#00c853",
    },
    {
        initCount: 0,
        name: "CS",
        color: "#00b0ff",
    },
];

export const COLORS = ["black", "green", "blue", "red", "white"];

export const buttonSize = {
    sm: {
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    md: {
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    lg: {
        paddingVertical: 30,
        paddingHorizontal: 25,
    },
};
