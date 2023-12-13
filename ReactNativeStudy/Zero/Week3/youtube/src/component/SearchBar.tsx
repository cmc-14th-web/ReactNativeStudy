import { TextInput, StyleSheet, View } from "react-native";
import { COLOR } from "../constant/color";
import { useState } from "react";
import IconButton from "./IconButton";
import { useSearchStore } from "../store/searchStore";

function SearchBar() {
    const [searchText, setSearchText] = useState('');
    const handleChangeText = (text: string) => {
        setSearchText(text);
    }

    const deleteSearch = useSearchStore(state => state.deleteSearch);
    const clearSearchText = () => {
        setSearchText('');
        deleteSearch();
    }

    const setSearch = useSearchStore(state => state.setSearch)
    const setIsSearched = useSearchStore(state => state.setIsSearched)
    const handleSearch = () => {
        setSearch(searchText);
        setIsSearched(true);
    }

    return (
        <View style={style.container}>
            <TextInput
                placeholder="Youtube 검색"
                style={style.input}
                placeholderTextColor={COLOR.Gray600}
                inputMode="search"
                value={searchText}
                onChangeText={handleChangeText}
                returnKeyType="search"
                onSubmitEditing={handleSearch}
            />
            <IconButton id="Close" width={22} height={22} fill={COLOR.Gray600} handlePress={clearSearchText} />
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: COLOR.Gray800,
        paddingHorizontal: 14,
        paddingVertical: 6,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
    },
    input: {
        color: COLOR.Gray600,
        fontSize: 14,
        fontWeight: '400',
        padding: 0,
    }
})

export default SearchBar;
