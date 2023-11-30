import React from 'react'
import { StyleSheet, View } from 'react-native';
import { theme } from '../constants';
import Icon from './Icon';
import { useColor } from '../store/colorState';

interface ColorSelectorProps {
    color: keyof typeof theme.color;
}

function ColorSelector({ color }: ColorSelectorProps) {
    const selectedColor = useColor().color;
    const handleChangeSelectedColor = useColor().changeColor;

    return (
        <>
            {color === selectedColor ?
                <Icon width="30" height="30" type="check" fill={theme.color[color]} key={color} />
                : <View style={{
                    ...style.selectedColor,
                    backgroundColor: theme.color[color],
                }}
                    key={color}
                    onTouchEnd={() => handleChangeSelectedColor(color)}
                />}
        </>
    );
}

const style = StyleSheet.create({
    selectedColor: {
        width: 24,
        height: 24,
        borderRadius: 100,
    },
})

export default ColorSelector;
