import { View, TouchableOpacity } from "react-native";
import { styles } from "./ColorPicker.style";
import { COLORS } from "@general/resources";
import { ColorPickerProps } from "@general/interfaces";

export default function ColorPicker({
    selectedColors,
    onColorSelect,
}: ColorPickerProps) {
    return (
        <View style={styles.container}>
            {COLORS.map((color) => (
                <TouchableOpacity
                    key={color}
                    style={[
                        styles.colorSwatch,
                        { backgroundColor: color },
                        selectedColors.includes(color) && styles.selected,
                    ]}
                    onPress={() => onColorSelect(color)}
                >
                    {selectedColors.includes(color) && (
                        <View style={styles.selectionIndicator} />
                    )}
                </TouchableOpacity>
            ))}
        </View>
    );
}
