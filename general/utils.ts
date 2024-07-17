export function randomFromArray(arr: string[] | number[]): string | number {
    return arr[Math.floor(Math.random() * arr.length)];
}

export function randomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
