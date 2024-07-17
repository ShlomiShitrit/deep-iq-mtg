import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./Counter.style";
import { CounterProps } from "@/general/interfaces";

export default function Counter({
    initCount,
    name,
    color = "#6200ee",
    isNegativeAllowed = false,
}: CounterProps) {
    const [count, setCount] = useState<number>(initCount);
    return (
        <View style={styles.container}>
            <Text style={{ ...styles.title, color: color }}>{name}</Text>
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
        </View>
    );
}
