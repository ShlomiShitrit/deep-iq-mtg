import { SafeAreaView, View } from "react-native";
import { styles } from "./SmallGrid.style";
import { SmallGridProps } from "@general/interfaces";
import Counter from "@components/Counter";

export default function SmallGrid({ componentsArray }: SmallGridProps) {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Counter {...componentsArray[0]}/>
            </View>
            <View style={styles.row}>
                <Counter {...componentsArray[2]} />
                <Counter {...componentsArray[1]} />
            </View>
        </View>
    );
}
