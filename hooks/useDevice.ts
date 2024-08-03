import { useState, useEffect } from "react";
import * as Device from "expo-device";

export default function useDevice() {
    const [isTablet, setIsTablet] = useState<boolean>(false);

    useEffect(() => {
        setIsTablet(Device.deviceType === Device.DeviceType.TABLET);
    }, []);

    return { isTablet };
}
