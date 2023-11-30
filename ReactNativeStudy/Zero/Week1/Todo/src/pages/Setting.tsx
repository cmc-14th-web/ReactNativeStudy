import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../constants';
import Icon from '../components/Icon';
import React from 'react';
import { useColor } from '../store/colorState';
import PageTitle from '../components/PageTitle';

const colors: (keyof typeof theme.color)[] = ['Orange', 'Green', 'Blue', 'Purple', 'Pink'];

function Setting() {
    const selectedColor = useColor().color;
    const handleChangeSelectedColor = useColor().changeColor;

    return (
        <View style={style.container}>
            <PageTitle title="설정" />
            <Text style={style.text}>색상을 선택해주세요.</Text>
            <View style={style.colorWrapper}>
                {colors.map((color) => (
                    color === selectedColor ?
                        <Icon width="30" height="30" type="check" fill={theme.color[color]} key={color} />
                        : <View style={{
                            ...style.selectedColor,
                            backgroundColor: theme.color[color],
                        }}
                            key={color}
                            onTouchEnd={() => handleChangeSelectedColor(color)}
                        />
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
    selectedColor: {
        width: 24,
        height: 24,
        borderRadius: 100,
    },
});

export default Setting;
