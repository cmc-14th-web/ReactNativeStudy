import { StyleSheet, Text, View } from "react-native";
import { COLOR, GRADIENT } from "../../constants/color";
import { LinearGradientText } from "react-native-linear-gradient-text";

interface HeaderProps {
    title: string;
}

function Header({ title }: HeaderProps) {
    return (
        <View style={styles.container}>
            <LinearGradientText
                colors={[COLOR.Pink, COLOR.Purple]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                text={title}
                textStyle={styles.title}
            />
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
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
    },
});

export default Header;
