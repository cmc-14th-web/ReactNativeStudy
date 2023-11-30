import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useColor } from '../store/colorState';

interface PageTitleProps {
    title: string;
    leftButton?: React.ReactNode;
    rightButton?: React.ReactNode;
}

function PageTitle({ title, leftButton, rightButton }: PageTitleProps) {
    const colorState = useColor().getColorCode();
    return (
        <View
            style={style.textWrapper}
        >
            {leftButton}
            <Text style={{ ...style.text, color: colorState }}>{title}</Text>
            {rightButton}
        </View>
    );
}

const style = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
    },
    textWrapper: {
        paddingVertical: 12,
        marginBottom: 26,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
});

export default PageTitle;
