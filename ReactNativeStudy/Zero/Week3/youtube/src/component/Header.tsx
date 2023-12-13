import { StyleSheet, Text, View } from "react-native";

import { COLOR } from "../constant/color";
import { useNavigator } from "../hook/useNavigator";

import IconButton from "./IconButton";

function Header() {
    const { stackNavigator } = useNavigator();
    const handlePress = () => {
        stackNavigator.navigate('SearchStack');
    }

    return (
        <View style={style.container}>
            <Text style={style.title}>Youtube</Text>
            <IconButton type="Search" width={24} height={24} fill={COLOR.White} handlePress={handlePress} />
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
