import { StyleSheet, View } from "react-native";

import { COLOR } from "../constant/color";
import { useSearchStore } from "../store/searchStore";

import SearchHeader from "../component/SearchHeader";
import SearchResultList from "../component/SearchResultList";
import EmptySearchResult from "../component/EmptySearchResult";

function Search() {
    const isSearched = useSearchStore(state => state.isSearched);

    const renderSearchResult = () => {
        if (isSearched) {
            return <SearchResultList />
        }

        return <EmptySearchResult />
    }

    return (
        <View style={style.container}>
            <SearchHeader />
            {renderSearchResult()}
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
