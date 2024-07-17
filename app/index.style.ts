import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    bottomContainer: {
        position: "absolute",
        bottom: 20, // Adjust as needed
        width: "100%",
        alignItems: "center",
    },
    topContainer: {
        position: "absolute",
        top: 50, // Adjust as needed
        width: "100%",
        alignItems: "center",
    },
    middleContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "15%",
    },
    rightContainer: {
        position: "absolute",
        right: 10, // Adjust as needed
    }
});
