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
