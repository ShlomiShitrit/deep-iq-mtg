import { useState, useEffect } from "react";
import { SafeAreaView, View } from "react-native";
import { styles } from "./index.style";
import Counter from "@components/Counter";
import SmallGrid from "@components/SmallGrid";
import CustomButton from "@components/CustomButton";
import LeftSection from "@components/LeftSection";
import RightSection from "@components/RightSection";
import PopupGrid from "@/components/PopupGrid";
import PopUp from "@components/PopUp";
import ColorPicker from "@components/ColorPicker";
import DisplayCount from "@components/DisplayCount";
import { COUNTERS } from "@general/resources";
import {
    iqTurn,
    convertStateToObject,
    createLibrary,
    startGame,
} from "@general/utils";
import { ObjectStates } from "@general/types";
import { useRecoilState } from "recoil";
import { aggroAtom, libraryAtom } from "@store/atoms";
import { PLAY_STATE, POPUP_STATE } from "@general/constants";
import useOrientation from "@hooks/useOrientation";

export default function Index() {
    const [selectedColors, setSelectedColors] = useState<string[]>([]);
    const [aggroCount, _] = useRecoilState(aggroAtom);
    const [library, setLibrary] = useRecoilState(libraryAtom);
    const [hand, setHand] = useState<string[]>([]);
    const [lands, setLands] = useState<ObjectStates<number>>({});
    const [graveyard, setGraveyard] = useState<string[]>([]);
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

    const handleIqTurn = () => {
        if (selectedColors.length === 0) {
            return;
        }
        const callbacks = {
            setHand,
            setLibrary,
            setGraveyard,
        };
        const { card, landToPlay } = iqTurn(
            library,
            hand,
            aggroCount,
            callbacks
        );
        setCurrentPlay({ ...currentPlay, card });
        setOpenPopup({ ...openPopup, card: true });
        setLands((prevLands) => {
            return { ...prevLands, [landToPlay]: prevLands[landToPlay] + 1 };
        });
    };

    const handleColorSelect = (color: string) => {
        setSelectedColors((prevColors) => {
            if (prevColors.includes(color)) {
                return prevColors.filter((c) => c !== color);
            } else {
                return [...prevColors, color];
            }
        });
    };

    const handleColorSubmit = () => {
        const libraryCards = createLibrary(selectedColors);

        startGame(libraryCards, setHand, setLibrary, setLands);

        setOpenPopup({
            ...openPopup,
            colors: false,
        });
    };

    const displayCountsBlockArray = [
        { title: "Hand", count: hand.length },
        { title: "Library", count: library.length },
        { title: "Graveyard", count: graveyard.length },
    ];

    const displayCountsWideBlock = {
        title: "Lands",
        blocks: Object.entries(lands).map(([title, count]) => ({
            title,
            count,
        })),
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
                <RightSection openPopup={openPopupState} />
                <View style={styles.middleTopSection}>
                    <DisplayCount
                        blocks={displayCountsBlockArray}
                        wideBlocks={displayCountsWideBlock}
                    />
                </View>
                <LeftSection
                    currentPlay={currentPlayState}
                    openPopup={openPopupState}
                />
                <PopUp
                    visible={openPopup.colors}
                    onClose={handleColorSubmit}
                    title="Select deck colors"
                    message=""
                    closeText="Start new game"
                >
                    <ColorPicker
                        selectedColors={selectedColors}
                        onColorSelect={handleColorSelect}
                    />
                </PopUp>
                <PopupGrid
                    currentPlay={currentPlayState}
                    openPopup={openPopupState}
                />
            </View>
            <View style={styles.middleContainer}>
                <CustomButton title="IQ Turn" onPress={handleIqTurn} />
            </View>
            <View style={styles.bottomLeftContainer}>
                <SmallGrid Component={Counter} componentsArray={COUNTERS} />
            </View>
        </SafeAreaView>
    );
}
