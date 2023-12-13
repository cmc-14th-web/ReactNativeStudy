import { StyleSheet, View } from "react-native";

import { COLOR } from "../constant/color";

import GoBackButton from "./GoBackButton";
import SearchBar from "./SearchBar";

function SearchHeader() {
    return (
        <View style={style.container}>
            <GoBackButton width={24} height={24} fill={COLOR.White} />
            <SearchBar />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        paddingHorizontal: 18,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
    }
})

export default SearchHeader;
