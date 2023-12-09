import { StyleSheet, View } from "react-native";
import { LinearGradientText } from "react-native-linear-gradient-text";
import { useNavigation } from "@react-navigation/native";

import { COLOR, GRADIENT } from "../../constants/color";
import { useImages } from "../../hooks/useImages";

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

    const { deleteStorage } = useImages();
    const handleDeleteListButton = () => {
        deleteStorage();
    }

    const isHomeScreen = () => {
        return title === 'CMC님의 사진첩'
    }

    const renderRightButton = () => {
        if (isHomeScreen()) {
            return <IconButton name='Trash' size={24} fill={GRADIENT.Gradient100} onPress={handleDeleteListButton} />
        }

        if (isBackButton) {
            return <View />
        }
    }

    return (
        <View style={styles.container}>
            {isBackButton && <IconButton name="ArrowBack" size={24} fill={GRADIENT.Gradient100} onPress={handleBackButton} />}
            <LinearGradientText
                colors={[COLOR.Pink, COLOR.Purple]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                text={title}
                textStyle={styles.title}
            />
            {renderRightButton()}
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
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
    },
});

export default Header;
