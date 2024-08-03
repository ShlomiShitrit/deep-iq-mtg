import { RightSectionProps } from "@general/interfaces";
import LifeCounter from "@/components/LifeCounter";
import CustomButton from "@components/CustomButton";
import Section from "@components/Section";
import { Children } from "@general/types";
import { tabletStyles, phoneStyles } from "./RightSection.style";
import useDevice from "@/hooks/useDevice";

export default function RightSection({ openPopup }: RightSectionProps) {
    const { isTablet } = useDevice();
    const styles = isTablet ? tabletStyles : phoneStyles;
    const rightSectionChildrenArray: Children[] = [
        {
            spaceStyle: styles.space,
            component: (
                <CustomButton
                    title="Start New Game"
                    onPress={() =>
                        openPopup.setState({ ...openPopup.state, colors: true })
                    }
                    size="md"
                    color="#00b0ff"
                />
            ),
        },
        {
            spaceStyle: styles.longSpace,
            component: <LifeCounter titles={["Opponent", "Player"]} />,
        },
    ];
    return (
        <Section
            children={rightSectionChildrenArray}
            style={styles.rightContainer}
        />
    );
}
