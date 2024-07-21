import { useState, useEffect } from "react";
import { SafeAreaView, View } from "react-native";
import { styles } from "./index.style";
import Counter from "@components/Counter";
import SmallGrid from "@components/SmallGrid";
import CustomButton from "@components/CustomButton";
import LeftSection from "@components/LeftSection";
import RightSection from "@components/RightSection";
import PopupGrid from "@/components/PopupGrid";
import { COUNTERS } from "@general/resources";
import { iqTurn, convertStateToObject } from "@general/utils";
import { ObjectStates } from "@general/types";
import { useRecoilState } from "recoil";
import { aggroAtom } from "@store/atoms";
import { PLAY_STATE, POPUP_STATE } from "@general/constants";
import useOrientation from "@hooks/useOrientation";

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

    const currentPlayState = convertStateToObject<ObjectStates<string>>(
        currentPlay,
        setCurrentPlay
    );

    const openPopupState = convertStateToObject<ObjectStates<boolean>>(
        openPopup,
        setOpenPopup
    );

    const selectedColorsState = convertStateToObject<string[]>(
        selectedColors,
        setSelectedColors
    );

    const handleIqTurn = () => {
        if (selectedColors.length === 0) {
            return;
        }
        const card = iqTurn(aggroCount, selectedColors);
        setCurrentPlay({ ...currentPlay, card });
        setOpenPopup({ ...openPopup, card: true });
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
                <RightSection openPopup={openPopupState} />
                <LeftSection
                    currentPlay={currentPlayState}
                    openPopup={openPopupState}
                />
                <PopupGrid
                    currentPlay={currentPlayState}
                    openPopup={openPopupState}
                    selectedColors={selectedColorsState}
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
