import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        alignItems: "center",
    },
    bottomLeftContainer: {
        position: "absolute",
        bottom: 20, // Adjust as needed
        left: 0, // Adjust as needed
        // width: "15%",
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
        marginTop: "15%",
    },
    rightContainer: {
        position: "absolute",
        right: 30, // Adjust as needed
    },
    leftContainer: {
        position: "absolute",
        left: 30, // Adjust as needed
    },
    middleTopSection: {
        marginBottom: 20,
    },
    space: {
        marginBottom: 20,
    },
    longSpace: {
        marginTop: 150,
        marginRight: 30,
    }
});
