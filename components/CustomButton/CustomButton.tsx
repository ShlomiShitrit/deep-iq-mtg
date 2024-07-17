import { TouchableOpacity, Text } from "react-native";
import { styles } from "./CustomButton.style";
import { CustomButtonProps } from "@general/interfaces";
import { buttonSize } from "@general/resources";

export default function CustomButton({
    title,
    onPress,
    size = "lg",
    color = "#6200ee",
}: CustomButtonProps) {
    return (
        <TouchableOpacity
            style={{
                ...styles.button,
                ...buttonSize[size],
                backgroundColor: color,
            }}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}
