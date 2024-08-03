import React from "react";
import { View, TouchableOpacity, Vibration } from "react-native";
import { HalfButtonProps } from "@general/interfaces";
import { styles } from "./HalfButton.style";

export default function HalfButton({ setCount, intervalRef }: HalfButtonProps) {
    const triggerVibration = () => {
        Vibration.vibrate(100);
    };

    const handleIncrement = (
        setter: React.Dispatch<React.SetStateAction<number>>,
        value: number
    ) => {
        triggerVibration();
        setter((prev) => prev + value);
    };

    const handleDecrement = (
        setter: React.Dispatch<React.SetStateAction<number>>,
        value: number,
        limit: number
    ) => {
        triggerVibration();
        setter((prev) => (prev > limit ? prev - value : 0));
    };

    const createLongPressHandler = (
        setter: React.Dispatch<React.SetStateAction<number>>,
        increment: boolean
    ) => {
        const onPressIn = () => {
            intervalRef.current = setInterval(() => {
                increment
                    ? handleIncrement(setter, 10)
                    : handleDecrement(setter, 10, 10);
            }, 800);
        };

        const onPressOut = () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };

        return { onPressIn, onPressOut };
    };
    return (
        <View style={styles.verticalHalfContainer}>
            <TouchableOpacity
                style={[styles.verticalHalf, styles.leftHalf]}
                onPress={() => handleDecrement(setCount, 1, 0)}
                onLongPress={createLongPressHandler(setCount, false).onPressIn}
                onPressOut={createLongPressHandler(setCount, false).onPressOut}
                delayLongPress={100}
            ></TouchableOpacity>
            <TouchableOpacity
                style={[styles.verticalHalf, styles.rightHalf]}
                onPress={() => handleIncrement(setCount, 1)}
                onLongPress={createLongPressHandler(setCount, true).onPressIn}
                onPressOut={createLongPressHandler(setCount, true).onPressOut}
                delayLongPress={100}
            ></TouchableOpacity>
        </View>
    );
}
