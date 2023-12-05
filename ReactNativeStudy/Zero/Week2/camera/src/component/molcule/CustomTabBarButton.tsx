import { LinearGradientText } from "react-native-linear-gradient-text"
import { Icon } from "../atom/Icon"
import { StyleSheet, View, Text } from "react-native"
import { GRADIENT, COLOR } from "../../constants/color"
import { IconName } from "../../constants/icons"

interface CustomTabBarButtonProps {
    name: IconName;
    focused: boolean;
    title: string;
}

function TextRendering({ title, focused }: Pick<CustomTabBarButtonProps, 'title' | 'focused'>) {
    if (focused) {
        return (
            <LinearGradientText
                colors={[COLOR.Pink, COLOR.Purple]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                text={title}
                textStyle={style.title}
            />
        )
    }

    return (
        <Text style={{
            ...style.title,
            color: COLOR.Gray400,
        }}>{title}</Text>
    )
}

function CustomTabBarButton({ name, focused, title }: CustomTabBarButtonProps) {
    return (
        <View
            style={style.container}
        >
            <Icon name={name} size={24} fill={focused ? GRADIENT.Gradient100 : COLOR.Gray400} />
            {TextRendering({ title, focused })}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
    },
    title: {
        fontSize: 12,
        fontWeight: '400',
    }
})

export default CustomTabBarButton
