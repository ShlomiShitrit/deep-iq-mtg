import { StyleSheet } from "react-native";

export const tabletStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        alignItems: "center",
        marginLeft: 30,
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 10,
        overflow: "hidden",
        width: 250,
        height: 320,
        elevation: 3,
        padding: 7,
        gap: 5,
    },
    half: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    playerHalf: {
        backgroundColor: "#33d6c0",
        flexDirection: "row",
        borderRadius: 10,
    },
    opponentHalf: {
        backgroundColor: "#ebc028",
        flexDirection: "row",
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: 10,
        textAlign: "center",
    },
});

export const phoneStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        alignItems: "center",
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 10,
        overflow: "hidden",
        width: 150,
        height: 200,
        elevation: 3,
        padding: 7,
        gap: 5,
    },
    half: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    playerHalf: {
        backgroundColor: "#33d6c0",
        flexDirection: "row",
        borderRadius: 10,
    },
    opponentHalf: {
        backgroundColor: "#ebc028",
        flexDirection: "row",
        borderRadius: 10,
    },
    title: {
        fontSize: 13,
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: 10,
        textAlign: "center",
    },
});
