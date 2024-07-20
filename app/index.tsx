import { useState, useEffect } from "react";
import { SafeAreaView, View } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import { styles } from "./index.style";
import Counter from "@components/Counter";
import SmallGrid from "@components/SmallGrid";
import CustomButton from "@components/CustomButton";
import ColorPicker from "@components/ColorPicker";
import Popup from "@components/PopUp";
import { COUNTERS } from "@general/resources";
import { iqTurn, rollTable } from "@general/utils";
import { ObjectStates } from "@general/types";
import { useRecoilState } from "recoil";
import { aggroAtom } from "@store/atoms";

export default function Index() {
    const [selectedColors, setSelectedColors] = useState<string[]>([]);
    const [aggroCount, _] = useRecoilState(aggroAtom);
    const [currentPlay, setCurrentPlay] = useState<ObjectStates<string>>({
        card: "",
        ct: "",
        cs: "",
    });
    const [openPopup, setOpenPopup] = useState<ObjectStates<boolean>>({
        colors: false,
        card: false,
        ct: false,
        cs: false,
    });

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
        setCurrentPlay({ ...currentPlay, card });
        setOpenPopup({ ...openPopup, card: true });
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.rightContainer}>
                    <View style={styles.space}>
                        <CustomButton
                            title="Deck colors"
                            onPress={() =>
                                setOpenPopup({ ...openPopup, colors: true })
                            }
                            size="sm"
                            color="#00b0ff"
                        />
                    </View>
                    <View style={styles.longSpace}>
                        <Counter
                            initCount={40}
                            name="Player Life"
                            color="#008080"
                        />
                    </View>
                </View>
                <View style={styles.leftContainer}>
                    <View style={styles.space}>
                        <CustomButton
                            title="Combat Tricks"
                            onPress={() => {
                                setCurrentPlay({
                                    ...currentPlay,
                                    ct: rollTable("CT"),
                                });
                                setOpenPopup({ ...openPopup, ct: true });
                            }}
                            size="md"
                            color="#00c853"
                        />
                    </View>
                    <CustomButton
                        title="Counter Spells"
                        onPress={() => {
                            setCurrentPlay({
                                ...currentPlay,
                                cs: rollTable("CS"),
                            });
                            setOpenPopup({ ...openPopup, cs: true });
                        }}
                        size="md"
                        color="#00b0ff"
                    />
                </View>
                <Popup
                    visible={openPopup.colors}
                    onClose={() =>
                        setOpenPopup({ ...openPopup, colors: false })
                    }
                    title="Select deck colors"
                    message=""
                >
                    <ColorPicker
                        selectedColors={selectedColors}
                        onColorSelect={handleColorSelect}
                    />
                </Popup>
                <Popup
                    visible={openPopup.card}
                    onClose={() => setOpenPopup({ ...openPopup, card: false })}
                    message={currentPlay.card}
                    title="IQ Turn"
                />
                <Popup
                    visible={openPopup.ct}
                    onClose={() => setOpenPopup({ ...openPopup, ct: false })}
                    message={currentPlay.ct}
                    title="Combat Trick"
                />
                <Popup
                    visible={openPopup.cs}
                    onClose={() => setOpenPopup({ ...openPopup, cs: false })}
                    message={currentPlay.cs}
                    title="Counter Spell"
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
