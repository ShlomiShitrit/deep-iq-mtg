import { TouchableOpacity, Text } from "react-native";
import { styles } from "./CustomButton.style";
import { CustomButtonProps } from "@general/interfaces";

export default function CustomButton({ title, onPress }: CustomButtonProps) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}
