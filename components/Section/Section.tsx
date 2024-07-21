import { View } from "react-native";
import { styles } from "./Section.style";
import { SectionProps } from "@general/interfaces";

export default function Section({ children, style }: SectionProps) {
    return (
        <View style={style}>
            {children.map((child, index) => (
                <View style={child.spaceStyle} key={index}>
                    {child.component}
                </View>
            ))}
        </View>
    );
}
