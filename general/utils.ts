import _ from "lodash";
import { TABLES, CS_TABLE, CT_TABLE } from "@general/resources";
import { stateType, ObjectStates } from "@general/types";

export function randomFromArray(arr: string[] | number[]): string | number {
    return arr[_.random(0, arr.length - 1)];
}

export function iqTurn(
    library: string[],
    hand: string[],
    aggroCount: number,
    callBacks: ObjectStates<React.Dispatch<React.SetStateAction<string[]>>>
) {
    const { newHand, newLibrary, card, landToPlay } = play(
        library,
        hand,
        aggroCount
    );
    callBacks.setHand(newHand);
    callBacks.setLibrary(newLibrary);
    return { card, landToPlay };
}

export function rollTable(table: "CT" | "CS") {
    const roll = _.random(1, 6);
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

export function createLibrary(selectedColors: string[]): string[] {
    const cardsPerColor = 60 / selectedColors.length;
    const library: string[] = selectedColors.flatMap((color) => {
        const cards = Array.from({ length: cardsPerColor }).fill(
            color
        ) as string[];
        return cards;
    });

    return _.shuffle(library);
}

export function startGame(
    library: string[],
    handCallBack: React.Dispatch<React.SetStateAction<string[]>>,
    libraryCallBack: React.Dispatch<React.SetStateAction<string[]>>,
    landCallBack: React.Dispatch<React.SetStateAction<ObjectStates<number>>>
): void {
    const hand = library.splice(0, 7);

    handCallBack(hand);
    libraryCallBack(library);

    const uniqueItems = _.uniq(library);
    const initLands = _.zipObject(
        uniqueItems,
        _.fill(Array(uniqueItems.length), 0)
    ) as ObjectStates<number>;

    landCallBack(initLands);
}

export function draw(
    library: string[],
    hand: string[]
): ObjectStates<string[]> {
    const libraryDeepCopy = _.cloneDeep(library);
    const newHand = [...hand, libraryDeepCopy.shift() as string];
    return {
        newHand,
        newLibrary: libraryDeepCopy,
    };
}

export function play(library: string[], hand: string[], aggroCount: number) {
    const { newHand, newLibrary } = draw(library, hand);

    const cardFromHand = newHand.shift() as string;
    const cardFromLibrary = newLibrary.shift() as string;
    const cardToPlay = randomFromArray([cardFromHand, cardFromLibrary]);
    const landToPlay =
        cardToPlay === cardFromHand ? cardFromLibrary : cardFromHand;

    const table = TABLES[cardToPlay as keyof typeof TABLES];
    let n: number = _.random(1, 6) + aggroCount;
    if (n < -2) n = -2;
    if (n > 13) n = 13;
    const card = table[n.toString() as keyof typeof table].text;

    return {
        newHand,
        newLibrary,
        card,
        landToPlay,
    };
}
