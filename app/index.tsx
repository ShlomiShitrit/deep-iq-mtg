import { useState } from "react";
import { SafeAreaView, View } from "react-native";
import { styles } from "./index.style";
import Counter from "@components/Counter";
import SmallGrid from "@components/SmallGrid";
import CustomButton from "@components/CustomButton";
import Popup from "@components/PopUp";
import { COUNTERS } from "@general/resources";

export default function Index() {
    const [selectedColors, setSelectedColors] = useState<string[]>([]);
    const [openColors, setOpenColors] = useState<boolean>(false);

    const handleColorSelect = (color: string) => {
        setSelectedColors((prevColors) => {
            if (prevColors.includes(color)) {
                return prevColors.filter((c) => c !== color);
            } else {
                return [...prevColors, color];
            }
        });
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.rightContainer}>
                    <CustomButton
                        title="Deck colors"
                        onPress={() => setOpenColors(true)}
                        size="sm"
                        color="#00b0ff"
                    />
                </View>
                <Popup
                    visible={openColors}
                    onClose={() => setOpenColors(false)}
                    selectedColors={selectedColors}
                    onColorSelect={handleColorSelect}
                />
            </View>
            <View style={styles.middleContainer}>
                <CustomButton
                    title="IQ Turn"
                    onPress={() => console.log(selectedColors)}
                />
            </View>
            <View style={styles.bottomContainer}>
                <SmallGrid Component={Counter} componentsArray={COUNTERS} />
            </View>
        </SafeAreaView>
    );
}
