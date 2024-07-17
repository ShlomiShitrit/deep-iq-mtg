import { useState } from "react";
import { SafeAreaView, View } from "react-native";
import { styles } from "./index.style";
import Counter from "@components/Counter";
import SmallGrid from "@components/SmallGrid";
import CustomButton from "@components/CustomButton";
import Popup from "@components/PopUp";
import CardPopUp from "@components/CardPopUp";
import { COUNTERS, TABLES } from "@general/resources";
import { randomFromArray, randomNumber } from "@general/utils";
import { useRecoilState } from "recoil";
import { aggroAtom } from "@store/atoms";

export default function Index() {
    const [selectedColors, setSelectedColors] = useState<string[]>([]);
    const [openColors, setOpenColors] = useState<boolean>(false);
    const [aggroCount, setAggroCount] = useRecoilState(aggroAtom);
    const [currentCard, setCurrentCard] = useState<string>("");
    const [openCard, setOpenCard] = useState<boolean>(false);

    const handleColorSelect = (color: string) => {
        setSelectedColors((prevColors) => {
            if (prevColors.includes(color)) {
                return prevColors.filter((c) => c !== color);
            } else {
                return [...prevColors, color];
            }
        });
    };

    const iqTurn = () => {
        const color = randomFromArray(selectedColors);
        const table = TABLES[color as keyof typeof TABLES];
        const n = randomNumber(1, 6) + aggroCount;
        let card: string = "";
        if (n <= -2) {
            card = table[0].text;
        } else if (n <= 1 && n >= -1) {
            card = table[1].text;
        } else if (n <= 4 && n >= 2) {
            card = table[2].text;
        } else if (n <= 6 && n >= 5) {
            card = table[3].text;
        } else if (n <= 8 && n >= 7) {
            card = table[4].text;
        } else if (n <= 12 && n >= 9) {
            card = table[5].text;
        } else if (n >= 13) {
            card = table[6].text;
        }
        setCurrentCard(card);
        setOpenCard(true);
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
                <CardPopUp
                    visible={openCard}
                    onClose={() => setOpenCard(false)}
                    message={currentCard}
                />
            </View>
            <View style={styles.middleContainer}>
                <CustomButton
                    title="IQ Turn"
                    onPress={iqTurn}
                />
            </View>
            <View style={styles.bottomContainer}>
                <SmallGrid Component={Counter} componentsArray={COUNTERS} />
            </View>
        </SafeAreaView>
    );
}
