import { StyleSheet } from "react-native";

export const tabletStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        elevation: 3,
        
    },
    counterContainer: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
        padding: 10,
        borderRadius: 10,
        elevation: 3,
        margin: 15,
    },
    wideContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        
    },
    landContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    }
});

export const phoneStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        elevation: 3,
        width: "45%",
        height: "70%",
        
    },
    counterContainer: {
        flexDirection: "column",
        alignItems: "center",
        width: "20%",
        height: "100%",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
        padding: 10,
        borderRadius: 10,
        elevation: 3,
        margin: 15,
    },
    wideContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        
    },
    landContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 12,
        fontWeight: "bold",
        marginBottom: 10,
    }
});
