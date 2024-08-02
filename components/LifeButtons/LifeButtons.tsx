import { Text } from "react-native";
import { LifeButtonsProps } from "@general/interfaces";
import { styles } from "./LifeButtons.style";

export default function LifeButtons({ count }: LifeButtonsProps) {
    return (
        <>
            <Text style={[styles.buttonText, styles.leftButton]}>-</Text>
            <Text style={styles.lifeText}>{count}</Text>
            <Text style={[styles.buttonText, styles.rightButton]}>+</Text>
        </>
    );
}
