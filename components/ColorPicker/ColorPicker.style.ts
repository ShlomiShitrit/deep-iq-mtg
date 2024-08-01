import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 20,
        paddingHorizontal: 20,
        gap: 30,
    },
    colorSwatch: {
        borderRadius: 25,
        borderWidth: 2,
        borderColor: "#ddd",
        alignItems: "center",
        justifyContent: "center",
    },
    selected: {
        borderColor: "#6200ee",
    },
    selectionIndicator: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: "#6200ee",
    },
});
