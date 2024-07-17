import { SafeAreaView, View } from "react-native";
import { styles } from "./index.style";
import Counter from "@components/Counter";
import SmallGrid from "@components/SmallGrid";
import CustomButton from "@components/CustomButton";
import { COUNTERS } from "@general/resources";

export default function Index() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.middleContainer}>
                <CustomButton
                    title="IQ Turn"
                    onPress={() => console.log("Press!")}
                />
            </View>
            <View style={styles.bottomContainer}>
                <SmallGrid Component={Counter} componentsArray={COUNTERS} />
            </View>
        </SafeAreaView>
    );
}
