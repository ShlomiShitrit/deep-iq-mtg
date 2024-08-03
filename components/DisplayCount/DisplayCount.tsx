import { View, Text, Image } from "react-native";
import { tabletStyles, phoneStyles } from "./DisplayCount.style";
import { DisplayCountProps } from "@general/interfaces";
import { MANA_SYMBOLS } from "@general/constants";
import useDevice from "@/hooks/useDevice";

export default function DisplayCount({
    blocks,
    wideBlocks,
}: DisplayCountProps) {
    const { isTablet } = useDevice();
    const styles = isTablet ? tabletStyles : phoneStyles;
    return (
        <View style={styles.container}>
            {blocks.map((block, index) => (
                <View key={index} style={styles.counterContainer}>
                    <Text style={styles.text}>{block.title}</Text>
                    <Text style={styles.text}>{block.count}</Text>
                </View>
            ))}
            <View style={styles.counterContainer}>
                <Text style={styles.text}>{wideBlocks.title}</Text>
                <View style={styles.wideContainer}>
                    {wideBlocks.blocks.map((block, index) => (
                        <View key={index} style={styles.landContainer}>
                            <Image
                                style={{ width: 30, height: 30 }}
                                source={{
                                    uri: MANA_SYMBOLS[
                                        block.title as keyof typeof MANA_SYMBOLS
                                    ],
                                }}
                            />
                            <Text style={styles.text}>{block.count}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
}
