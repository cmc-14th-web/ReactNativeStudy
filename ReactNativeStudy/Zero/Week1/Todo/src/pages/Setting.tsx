import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { theme } from '../constants';
import PageTitle from '../components/PageTitle';
import ColorSelector from '../components/ColorSelector';

const colors: (keyof typeof theme.color)[] = ['Orange', 'Green', 'Blue', 'Purple', 'Pink'];

function Setting() {
    return (
        <View style={style.container}>
            <PageTitle title="설정" />
            <Text style={style.text}>색상을 선택해주세요.</Text>
            <View style={style.colorWrapper}>
                {colors.map((color) => (
                    <ColorSelector color={color} key={color} />
                ))}
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        paddingHorizontal: 32,
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: '400',
        color: theme.color.Black,
        marginBottom: 32,
        width: '100%',
    },
    colorWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 66,
        width: '100%',
    },
});

export default Setting;
