import { Children } from "@general/types";
import { LeftSectionProps } from "@general/interfaces";
import CustomButton from "@components/CustomButton";
import Section from "@components/Section";
import { styles } from "./LeftSection.style";
import { rollTable } from "@general/utils";

export default function LeftSection({
    currentPlay,
    openPopup,
}: LeftSectionProps) {
    const leftSectionChildrenArray: Children[] = [
        {
            spaceStyle: styles.space,
            component: (
                <CustomButton
                    title="Combat Tricks"
                    onPress={() => {
                        currentPlay.setState({
                            ...currentPlay.state,
                            ct: rollTable("CT"),
                        });
                        openPopup.setState({ ...openPopup.state, ct: true });
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
                        currentPlay.setState({
                            ...currentPlay.state,
                            cs: rollTable("CS"),
                        });
                        openPopup.setState({ ...openPopup.state, cs: true });
                    }}
                    size="md"
                    color="#00b0ff"
                />
            ),
        },
    ];

    return (
        <Section
            children={leftSectionChildrenArray}
            style={styles.leftContainer}
        />
    );
}
