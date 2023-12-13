import { TextInput, StyleSheet, View } from "react-native";
import { useState } from "react";

import { COLOR } from "../constant/color";
import { useSearchStore } from "../store/searchStore";

import IconButton from "./IconButton";

function SearchBar() {
    const [isCloseButtonVisible, setIsCloseButtonVisible] = useState(false);
    const [searchText, setSearchText] = useState('');
    const handleChangeText = (text: string) => {
        setSearchText(text);
        if (text.length > 0) {
            showCloseButton();
        } else {
            hideCloseButton();
        }
    }

    const deleteSearch = useSearchStore(state => state.deleteSearch);
    const clearSearchText = () => {
        setSearchText('');
        deleteSearch();
        hideCloseButton();
    }

    const setSearch = useSearchStore(state => state.setSearch)
    const setIsSearched = useSearchStore(state => state.setIsSearched)
    const handleSearch = () => {
        setSearch(searchText);
        setIsSearched(true);
    }

    const showCloseButton = () => setIsCloseButtonVisible(true);
    const hideCloseButton = () => setIsCloseButtonVisible(false);

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
            {isCloseButtonVisible && <IconButton id="Close" width={22} height={22} fill={COLOR.Gray600} handlePress={clearSearchText} />}
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
        flex: 1,
    }
})

export default SearchBar;
