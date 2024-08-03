import { View } from "react-native";
import { styles } from "./SmallGrid.style";
import { SmallGridProps } from "@general/interfaces";
import Counter from "@components/Counter";

export default function SmallGrid({ componentsArray }: SmallGridProps) {
    return (
        <View style={styles.container}>
            <View style={styles.column}>
                {componentsArray.map((component, index) => (
                    <Counter key={index} {...component} />
                ))}
            </View>
        </View>
    );
}
