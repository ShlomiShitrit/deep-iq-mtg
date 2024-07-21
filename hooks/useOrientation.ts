import * as ScreenOrientation from "expo-screen-orientation";
import { Orientation } from "@general/types";

export default function useOrientation(orientation: Orientation) {
    async function changeScreenOrientation() {
        await ScreenOrientation.lockAsync(
            ScreenOrientation.OrientationLock[orientation]
        );
    }

    return changeScreenOrientation;
}
