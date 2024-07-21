import { View, Text } from "react-native";
import { RightSectionProps } from "@general/interfaces";
import Counter from "@components/Counter";
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
                    title="Deck colors"
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
            component: (
                <Counter initCount={40} name="Player Life" color="#008080" />
            ),
        },
    ];
    return (
        <Section
            children={rightSectionChildrenArray}
            style={styles.rightContainer}
        />
    );
}
