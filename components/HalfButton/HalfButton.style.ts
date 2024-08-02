import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    verticalHalfContainer: {
        flexDirection: "row",
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
    },
    verticalHalf: {
        flex: 1,
        height: "100%",
        width: "100%",
    },
    leftHalf: {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
    rightHalf: {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
});
