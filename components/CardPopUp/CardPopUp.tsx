import { View, Modal, Text, TouchableOpacity } from "react-native";
import { styles } from "./CardPopUp.style";
import { CardPopupProps } from "@general/interfaces";

export default function CardPopUp({
    visible,
    onClose,
    message,
}: CardPopupProps) {
    return (
        <Modal
            transparent={true}
            animationType="slide"
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.popup}>
                <Text style={styles.message}>{message}</Text>
                    <TouchableOpacity style={styles.button} onPress={onClose}>
                        <Text style={styles.buttonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}
