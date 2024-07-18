import { useState, useEffect } from "react";
import { SafeAreaView, View } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import { styles } from "./index.style";
import Counter from "@components/Counter";
import SmallGrid from "@components/SmallGrid";
import CustomButton from "@components/CustomButton";
import Popup from "@components/PopUp";
import CardPopUp from "@components/CardPopUp";
import { COUNTERS } from "@general/resources";
import { iqTurn, rollTable } from "@general/utils";
import { useRecoilState } from "recoil";
import { aggroAtom } from "@store/atoms";

export default function Index() {
    const [selectedColors, setSelectedColors] = useState<string[]>([]);
    const [openColors, setOpenColors] = useState<boolean>(false);
    const [aggroCount, setAggroCount] = useRecoilState(aggroAtom);
    const [currentCard, setCurrentCard] = useState<string>("");
    const [openCard, setOpenCard] = useState<boolean>(false);
    const [currentCombatTrick, setCurrentCombatTrick] = useState<string>("");
    const [currentCounterSpell, setCurrentCounterSpell] = useState<string>("");
    const [openCT, setOpenCT] = useState<boolean>(false);
    const [openCS, setOpenCS] = useState<boolean>(false);

    async function changeScreenOrientation() {
        await ScreenOrientation.lockAsync(
            ScreenOrientation.OrientationLock.LANDSCAPE
        );
    }

    useEffect(() => {
        changeScreenOrientation();
    }, []);

    const handleColorSelect = (color: string) => {
        setSelectedColors((prevColors) => {
            if (prevColors.includes(color)) {
                return prevColors.filter((c) => c !== color);
            } else {
                return [...prevColors, color];
            }
        });
    };

    const handleIqTurn = () => {
        const card = iqTurn(aggroCount, selectedColors);
        setCurrentCard(card);
        setOpenCard(true);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.rightContainer}>
                <View style={styles.space}>
                    <CustomButton
                        title="Deck colors"
                        onPress={() => setOpenColors(true)}
                        size="sm"
                        color="#00b0ff"
                    />
                    </View>
                    <View style={styles.longSpace}>
                    <Counter initCount={40} name="Player Life" color="#008080" />
                    </View>
                </View>
                <View style={styles.leftContainer}>
                    <View style={styles.space}>
                    <CustomButton
                        title="Combat Tricks"
                        onPress={() => {
                            setCurrentCombatTrick(rollTable("CT"));
                            setOpenCT(true);
                        }}
                        size="md"
                        color="#00c853"
                    />
                    </View>
                    <CustomButton
                        title="Counter Spells"
                        onPress={() => {
                            setCurrentCounterSpell(rollTable("CS"));
                            setOpenCS(true);
                        }}
                        size="md"
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
                <CardPopUp
                    visible={openCT}
                    onClose={() => setOpenCT(false)}
                    message={currentCombatTrick}
                />
                <CardPopUp
                    visible={openCS}
                    onClose={() => setOpenCS(false)}
                    message={currentCounterSpell}
                />
            </View>
            <View style={styles.middleContainer}>
                <CustomButton title="IQ Turn" onPress={handleIqTurn} />
            </View>
            <View style={styles.bottomContainer}>
                <SmallGrid Component={Counter} componentsArray={COUNTERS} />
            </View>
        </SafeAreaView>
    );
}
