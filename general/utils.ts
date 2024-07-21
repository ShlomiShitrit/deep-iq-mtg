import { TABLES, CS_TABLE, CT_TABLE } from "@general/resources";
import { stateType } from "@general/types";
export function randomFromArray(arr: string[] | number[]): string | number {
    return arr[Math.floor(Math.random() * arr.length)];
}

export function randomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function iqTurn(aggroCount: number, selectedColors: string[]) {
    const color = randomFromArray(selectedColors);
    const table = TABLES[color as keyof typeof TABLES];
    const n = randomNumber(1, 6) + aggroCount;
    let card: string = "";
    if (n <= -2) {
        card = table[0].text;
    } else if (n <= 1 && n >= -1) {
        card = table[1].text;
    } else if (n <= 4 && n >= 2) {
        card = table[2].text;
    } else if (n <= 6 && n >= 5) {
        card = table[3].text;
    } else if (n <= 8 && n >= 7) {
        card = table[4].text;
    } else if (n <= 12 && n >= 9) {
        card = table[5].text;
    } else if (n >= 13) {
        card = table[6].text;
    }
    return card;
}

export function rollTable(table: "CT" | "CS") {
    const roll = randomNumber(1, 6);
    const chosenTable = table === "CT" ? CT_TABLE : CS_TABLE;
    return chosenTable[roll as keyof typeof chosenTable].text;
}

export function convertStateToObject<T>(
    state: T,
    setState: React.Dispatch<React.SetStateAction<T>>
): stateType<T> {
    return {
        state,
        setState,
    };
}
