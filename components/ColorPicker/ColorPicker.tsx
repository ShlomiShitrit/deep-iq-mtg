import { View, TouchableOpacity, Image } from "react-native";
import { styles } from "./ColorPicker.style";
import { COLORS } from "@general/resources";
import { MANA_SYMBOLS } from "@/general/constants";
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
                        selectedColors.includes(color) && styles.selected,
                    ]}
                    onPress={() => onColorSelect(color)}
                >
                    <Image
                        style={styles.image}
                        source={{
                            uri: MANA_SYMBOLS[
                                color as keyof typeof MANA_SYMBOLS
                            ],
                        }}
                    />
                </TouchableOpacity>
            ))}
        </View>
    );
}
