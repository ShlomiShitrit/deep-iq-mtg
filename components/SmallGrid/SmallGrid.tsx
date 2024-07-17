import { SafeAreaView, View } from "react-native";
import { styles } from "./SmallGrid.style";
import { SmallGridProps } from "@general/interfaces";

export default function SmallGrid({
    Component,
    componentsArray,
}: SmallGridProps) {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.gridContainer}>
                    {componentsArray.map((comp, index) => (
                        <View key={index} style={styles.gridItem}>
                            <Component {...comp} />
                        </View>
                    ))}
                </View>
            </View>
        </SafeAreaView>
    );
}
