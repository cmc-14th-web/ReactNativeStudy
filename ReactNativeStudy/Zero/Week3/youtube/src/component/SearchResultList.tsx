import { FlatList, View } from "react-native";
import { useGetSearchResults } from "../api/search";
import VideoItem from "./VideoItem";
import { Text } from "react-native-svg";

function SearchResultList() {
    const { searchResults,
        isLoading,
        error,
        fetchNextPage,
        hasNextPage
    } = useGetSearchResults('react');

    const loadNextPageData = () => {
        if (hasNextPage) {
            fetchNextPage();
        }
    }

    if (isLoading) {
        return <Text>로딩중</Text>
    }

    return (
        <FlatList
            data={searchResults}
            renderItem={({ item }) => <VideoItem videoInfo={item} />}
            keyExtractor={(_, index) => index.toString()}
            onEndReached={loadNextPageData}
            onEndReachedThreshold={0.5}
            refreshing={isLoading}
        />
    )
}

export default SearchResultList;
