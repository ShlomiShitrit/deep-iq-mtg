import { Stack } from "expo-router";
import { RecoilRoot } from "recoil";

export default function RootLayout() {
    return (
        <RecoilRoot>
            <Stack>
                <Stack.Screen name="index" options={{ headerShown: false }} />
            </Stack>
        </RecoilRoot>
    );
}
