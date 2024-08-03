import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { tabletStyles, phoneStyles } from "./Counter.style";
import { CounterProps } from "@/general/interfaces";
import { useRecoilState } from "recoil";
import { aggroAtom } from "@store/atoms";
import useDevice from "@/hooks/useDevice";

export default function Counter({
    initCount,
    name,
    isAggro = false,
    color = "#6200ee",
    isNegativeAllowed = false,
}: CounterProps) {
    const [generalCount, setGeneralCount] = useState<number>(initCount);
    const [aggroCount, setAggroCount] = useRecoilState(aggroAtom);

    const { isTablet } = useDevice();
    const count = isAggro ? aggroCount : generalCount;
    const setCount = isAggro ? setAggroCount : setGeneralCount;
    const styles = isTablet ? tabletStyles : phoneStyles;
    return (
        <View style={styles.container}>
            {isTablet && (
                <Text style={{ ...styles.title, color: color }}>{name}</Text>
            )}
            <View style={styles.counterContainer}>
                <TouchableOpacity
                    style={{ ...styles.button, backgroundColor: color }}
                    onPress={() =>
                        setCount(
                            count > 0
                                ? count - 1
                                : isNegativeAllowed
                                ? count - 1
                                : 0
                        )
                    }
                >
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.count}>{count}</Text>
                <TouchableOpacity
                    style={{ ...styles.button, backgroundColor: color }}
                    onPress={() => setCount(count + 1)}
                >
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
            {!isTablet && (
                <Text style={{ ...styles.title, color: color }}>{name}</Text>
            )}
        </View>
    );
}
