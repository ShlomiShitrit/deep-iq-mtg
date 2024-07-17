import { View, Modal, Text, TouchableOpacity } from "react-native";
import { styles } from "./PopUp.style";
import { PopupProps } from "@general/interfaces";
import ColorPicker from "@components/ColorPicker";

export default function PopUp({
    visible,
    onClose,
    selectedColors,
    onColorSelect,
}: PopupProps) {
    return (
        <Modal
            transparent={true}
            animationType="slide"
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.popup}>
                    <ColorPicker
                        selectedColors={selectedColors}
                        onColorSelect={onColorSelect}
                    />
                    <TouchableOpacity style={styles.button} onPress={onClose}>
                        <Text style={styles.buttonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}
