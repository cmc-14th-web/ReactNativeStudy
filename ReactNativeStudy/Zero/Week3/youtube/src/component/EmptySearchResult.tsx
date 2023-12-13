import { StyleSheet, Text, View } from "react-native";
import { COLOR } from "../constant/color";

function EmptySearchResult() {
    return (
        <View style={style.container}>
            <Text style={style.text}>검색어를 입력하세요.</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    text: {
        color: COLOR.Gray100,
    }
})

export default EmptySearchResult;
