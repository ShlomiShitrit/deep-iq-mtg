import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
        paddingHorizontal: 20,
      },
      colorSwatch: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
      },
      selected: {
        borderColor: '#6200ee',
      },
      selectionIndicator: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#6200ee',
      },
});
