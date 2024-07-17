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
    },
    {
        initCount: 0,
        name: "CT",
    },
    {
        initCount: 0,
        name: "CS",
    },
];
