import { useState, useRef } from "react";
import { View, Text } from "react-native";
import HalfButton from "@components/HalfButton";
import LifeButtons from "@components/LifeButtons";
import { LifeCounterProps } from "@general/interfaces";
import { styles } from "./LifeCounter.style";

export default function LifeCounter({ titles }: LifeCounterProps) {
    const [playerLife, setPlayerLife] = useState<number>(40);
    const [iqLife, setIqLife] = useState<number>(40);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{titles[0]}</Text>
            <View style={styles.card}>
                <View style={[styles.half, styles.opponentHalf]}>
                    <HalfButton
                        setCount={setIqLife}
                        intervalRef={intervalRef}
                    />
                    <LifeButtons count={iqLife} />
                </View>
                <View style={[styles.half, styles.playerHalf]}>
                    <HalfButton
                        setCount={setPlayerLife}
                        intervalRef={intervalRef}
                    />
                    <LifeButtons count={playerLife} />
                </View>
            </View>
            <Text style={styles.title}>{titles[1]}</Text>
        </View>
    );
}
