import { useState, useEffect } from "react";
import { SafeAreaView, View } from "react-native";
import { styles } from "./index.style";
import Counter from "@components/Counter";
import SmallGrid from "@components/SmallGrid";
import CustomButton from "@components/CustomButton";
import ColorPicker from "@components/ColorPicker";
import Popup from "@components/PopUp";
import Section from "@/components/Section";
import { COUNTERS } from "@general/resources";
import { iqTurn, rollTable } from "@general/utils";
import { ObjectStates, Children } from "@general/types";
import { useRecoilState } from "recoil";
import { aggroAtom } from "@store/atoms";
import { PLAY_STATE, POPUP_STATE } from "@general/constants";
import useOrientation from "@hooks/useOrientation";
import { SectionProps } from "@general/interfaces";

export default function Index() {
    const [selectedColors, setSelectedColors] = useState<string[]>([]);
    const [aggroCount, _] = useRecoilState(aggroAtom);
    const [currentPlay, setCurrentPlay] =
        useState<ObjectStates<string>>(PLAY_STATE);
    const [openPopup, setOpenPopup] =
        useState<ObjectStates<boolean>>(POPUP_STATE);

    const changeScreenOrientation = useOrientation("LANDSCAPE");

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

    const popupArray = [
        {
            name: "colors",
            title: "Select deck colors",
            children: (
                <ColorPicker
                    selectedColors={selectedColors}
                    onColorSelect={handleColorSelect}
                />
            ),
        },
        {
            name: "card",
            title: "IQ Turn",
        },
        {
            name: "ct",
            title: "Combat Trick",
        },
        {
            name: "cs",
            title: "Counter Spell",
        },
    ];

    const rightSectionChildrenArray: Children[] = [
        {
            spaceStyle: styles.space,
            component: (
                <CustomButton
                    title="Deck colors"
                    onPress={() => setOpenPopup({ ...openPopup, colors: true })}
                    size="sm"
                    color="#00b0ff"
                />
            ),
        },
        {
            spaceStyle: styles.longSpace,
            component: (
                <Counter initCount={40} name="Player Life" color="#008080" />
            ),
        },
    ];

    const leftSectionChildrenArray: Children[] = [
        {
            spaceStyle: styles.space,
            component: (
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
            ),
        },
        {
            spaceStyle: styles.space,
            component: (
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
            ),
        },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
                <Section
                    children={rightSectionChildrenArray}
                    style={styles.rightContainer}
                />
                <Section
                    children={leftSectionChildrenArray}
                    style={styles.leftContainer}
                />
                {popupArray.map((popup, index) => (
                    <Popup
                        key={index}
                        visible={openPopup[popup.name]}
                        onClose={() =>
                            setOpenPopup({ ...openPopup, [popup.name]: false })
                        }
                        message={currentPlay[popup.name] || ""}
                        children={popup.children || null}
                        title={popup.title}
                    />
                ))}
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
