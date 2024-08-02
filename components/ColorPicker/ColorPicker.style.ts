import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 20,
        paddingHorizontal: 20,
        gap: 20,
    },
    image: {
        width: 40,
        height: 40,
    },
    colorSwatch: {
        borderRadius: 25,
        borderWidth: 4,
        borderColor: "#ddd",
        alignItems: "center",
        justifyContent: "center",
    },
    selected: {
        borderColor: "#6200ee",
        borderWidth: 4,
        borderRadius: 25,
    },
    selectionIndicator: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: "#6200ee",
    },
});
