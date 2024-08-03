import { StyleSheet } from "react-native";

export const tabletStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },

    counterContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        elevation: 3,
    },
    button: {
        padding: 10,
        borderRadius: 50,
        marginHorizontal: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    },
    count: {
        fontSize: 40,
        fontWeight: "bold",
    },
});

export const phoneStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        flexDirection: "row",
        gap: 15,
        
    },
    title: {
        fontSize: 15,
        fontWeight: "bold",
        marginBottom: 10,
    marginHorizontal: 10,
    },

    counterContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        elevation: 3,
    },
    button: {
        padding: 10,
        borderRadius: 50,
        marginHorizontal: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 10,
        fontWeight: "bold",
    },
    count: {
        fontSize: 20,
        fontWeight: "bold",
    },
});
