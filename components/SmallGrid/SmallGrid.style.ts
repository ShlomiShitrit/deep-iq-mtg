import { StyleSheet } from "react-native";

export const tabletStyles = StyleSheet.create({
    container: {
        flex: 1,
        width: 200,
        height: 450,
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        padding: 10,
    },
    column: {
        position: "relative",
        flexDirection: "column",
    },
});

export const phoneStyles = StyleSheet.create({
    container: {
        flex: 1,
        width: 200,
        height: 240,
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        padding: 10,
    },
    column: {
        position: "relative",
        flexDirection: "column",
    },
});
