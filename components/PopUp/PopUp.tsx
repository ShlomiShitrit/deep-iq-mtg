import { View, Modal, Text, TouchableOpacity } from "react-native";
import { styles } from "./PopUp.style";
import { PopupProps } from "@general/interfaces";

export default function PopUp({
    visible,
    onClose,
    children,
    message,
    title,
    closeText = "Close",
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
                    {children}
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.message}>{message}</Text>
                    <TouchableOpacity style={styles.button} onPress={onClose}>
                        <Text style={styles.buttonText}>{closeText}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}
