import { PopupGridProps } from "@general/interfaces";
import PopUp from "@components/PopUp";
import ColorPicker from "@components/ColorPicker";
import { styles } from "./PopupGrid.style";

export default function PopupGrid({
    selectedColors,
    openPopup,
    currentPlay,
}: PopupGridProps) {
    const handleColorSelect = (color: string) => {
        selectedColors.setState((prevColors) => {
            if (prevColors.includes(color)) {
                return prevColors.filter((c) => c !== color);
            } else {
                return [...prevColors, color];
            }
        });
    };

    const popupArray = [
        {
            name: "colors",
            title: "Select deck colors",
            children: (
                <ColorPicker
                    selectedColors={selectedColors.state}
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
    return (
        <>
            {popupArray.map((popup, index) => (
                <PopUp
                    key={index}
                    visible={openPopup.state[popup.name]}
                    onClose={() =>
                        openPopup.setState({
                            ...openPopup.state,
                            [popup.name]: false,
                        })
                    }
                    message={currentPlay.state[popup.name] || ""}
                    {...popup}
                />
            ))}
        </>
    );
}
