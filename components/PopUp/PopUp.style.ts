import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    popup: {
        width: 300,
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 10,
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    message: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#6200ee",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
    },
});
