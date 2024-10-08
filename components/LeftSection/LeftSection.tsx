import { Children } from "@general/types";
import { LeftSectionProps } from "@general/interfaces";
import CustomButton from "@components/CustomButton";
import Section from "@components/Section";
import { tabletStyles, phoneStyles } from "./LeftSection.style";
import { rollTable } from "@general/utils";
import useDevice from "@/hooks/useDevice";

export default function LeftSection({
    currentPlay,
    openPopup,
}: LeftSectionProps) {
    const { isTablet } = useDevice();
    const styles = isTablet ? tabletStyles : phoneStyles;
    
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
                    size="sm"
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
                    size="sm"
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
