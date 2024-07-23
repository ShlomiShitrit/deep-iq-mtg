import { PopupGridProps } from "@general/interfaces";
import PopUp from "@components/PopUp";
import { styles } from "./PopupGrid.style";

export default function PopupGrid({
    openPopup,
    currentPlay,
}: PopupGridProps) {

    const popupArray = [
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
