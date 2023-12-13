import { FlatList, StyleSheet, Text, View } from "react-native";
import SearchHeader from "../component/SearchHeader";
import { useGetSearchResults } from "../api/search";
import SearchResultList from "../component/SearchResultList";
import { COLOR } from "../constant/color";

function Search() {
    return (
        <View style={style.container}>
            <SearchHeader />
            <SearchResultList />
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: COLOR.Gray900,
        height: "100%",
    },
})

export default Search;
