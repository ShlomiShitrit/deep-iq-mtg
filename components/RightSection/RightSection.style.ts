import { StyleSheet } from "react-native";

export const tabletStyles = StyleSheet.create({
    longSpace: {
        marginTop: 50,
        marginRight: 30,
    },
    space: {
        marginBottom: 20,
    },
    rightContainer: {
        position: "absolute",
        right: 30,
        width: "15%",
        marginRight: 40,
    },
});

export const phoneStyles = StyleSheet.create({
    longSpace: {
        marginTop: 5,
        // marginRight: 5,
    },
    space: {
        marginBottom: 5,
        right: 35,
    },
    rightContainer: {
        position: "absolute",
        right: 5,
        width: "10%",
        marginRight: 45,
    },
});
