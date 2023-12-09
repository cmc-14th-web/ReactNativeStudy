import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

import { COLOR } from "../../constants/color";

interface BackgroundContainerProps {
    children: ReactNode;
    style?: object;
}

function BackgroundContainer({ children, style }: BackgroundContainerProps) {
    return (
        <View style={{
            ...styles.container,
            ...style,
        }}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLOR.Gray900,
        height: '100%',
    },
});

export default BackgroundContainer;
