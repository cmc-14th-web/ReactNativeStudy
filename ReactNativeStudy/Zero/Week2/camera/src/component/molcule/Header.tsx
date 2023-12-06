import { StyleSheet, View } from "react-native";
import { LinearGradientText } from "react-native-linear-gradient-text";
import { useNavigation } from "@react-navigation/native";

import { COLOR, GRADIENT } from "../../constants/color";

import IconButton from "./IconButton";

interface HeaderProps {
    title: string;
    isBackButton?: boolean;
}

function Header({ title, isBackButton }: HeaderProps) {
    const navigation = useNavigation();
    const handleBackButton = () => {
        navigation.goBack();
    }

    return (
        <View style={{
            ...styles.container,
            justifyContent: isBackButton ? 'space-between' : 'flex-start',
        }}>
            {isBackButton && <IconButton name="ArrowBack" size={24} fill={GRADIENT.Gradient100} onPress={handleBackButton} />}
            <LinearGradientText
                colors={[COLOR.Pink, COLOR.Purple]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                text={title}
                textStyle={{
                    ...styles.title,
                }}
            />
            {isBackButton && <View style={{ width: 24 }} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 18,
        paddingVertical: 20,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        flexDirection: 'row',
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
    },
});

export default Header;
