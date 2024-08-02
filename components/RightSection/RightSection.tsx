import { RightSectionProps } from "@general/interfaces";
import LifeCounter from "@/components/LifeCounter";
import CustomButton from "@components/CustomButton";
import Section from "@components/Section";
import { Children } from "@general/types";
import { styles } from "./RightSection.style";

export default function RightSection({ openPopup }: RightSectionProps) {
    const rightSectionChildrenArray: Children[] = [
        {
            spaceStyle: styles.space,
            component: (
                <CustomButton
                    title="Start New Game"
                    onPress={() =>
                        openPopup.setState({ ...openPopup.state, colors: true })
                    }
                    size="sm"
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
