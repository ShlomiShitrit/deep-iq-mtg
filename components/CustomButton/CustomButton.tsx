import { TouchableOpacity, Text } from "react-native";
import { tabletStyles, phoneStyles } from "./CustomButton.style";
import { CustomButtonProps } from "@general/interfaces";
import { buttonSize } from "@general/resources";
import useDevice from "@/hooks/useDevice";

export default function CustomButton({
    title,
    onPress,
    size = "lg",
    color = "#6200ee",
}: CustomButtonProps) {
    const { isTablet } = useDevice();
    const styles = isTablet ? tabletStyles : phoneStyles;
    const buttonSizeObject = isTablet ? buttonSize.tablet : buttonSize.phone;
    return (
        <TouchableOpacity
            style={{
                ...styles.button,
                ...buttonSizeObject[size],
                backgroundColor: color,
            }}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}
