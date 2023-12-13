import { StyleSheet, Text, View } from "react-native";
import { COLOR } from "../constant/color";
import IconButton from "./IconButton";
import { useNavigation } from "@react-navigation/native";

function Header() {
    const navigation = useNavigation();
    const handlePress = () => {
        navigation.navigate('SearchStack');
    }

    return (
        <View style={style.container}>
            <Text style={style.title}>Youtube</Text>
            <IconButton id="Search" width={24} height={24} fill={COLOR.White} handlePress={handlePress} />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        paddingHorizontal: 18,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        color: COLOR.White,
    },
});

export default Header;
