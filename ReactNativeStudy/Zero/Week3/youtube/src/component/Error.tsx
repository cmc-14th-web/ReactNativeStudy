import { View, Text, StyleSheet } from "react-native";

import { COLOR } from "../constant/color";

function Error() {
    return (
        <View style={style.container}>
            <Text style={style.text}>에러가 발생하였습니다.{`\n`}잠시 후 다시 시도해주세요.</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    text: {
        fontSize: 20,
        color: COLOR.Gray100,
        textAlign: 'center',
    }
});

export default Error;
