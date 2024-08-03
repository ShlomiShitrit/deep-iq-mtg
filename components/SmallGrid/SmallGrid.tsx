import { View } from "react-native";
import { phoneStyles, tabletStyles } from "./SmallGrid.style";
import { SmallGridProps } from "@general/interfaces";
import Counter from "@components/Counter";
import useDevice from "@/hooks/useDevice";

export default function SmallGrid({ componentsArray }: SmallGridProps) {
    const { isTablet } = useDevice();
    const styles = isTablet ? tabletStyles : phoneStyles;
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
