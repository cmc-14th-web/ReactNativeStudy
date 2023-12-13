import { FlatList, View } from "react-native";
import { useGetSearchResults } from "../api/search";
import VideoItem from "./VideoItem";
import { Text } from "react-native-svg";
import { useSearchStore } from "../store/searchStore";

function SearchResultList() {
    const query = useSearchStore(state => state.search);
    const { searchResults,
        isLoading,
        error,
        fetchNextPage,
        hasNextPage
    } = useGetSearchResults(query);

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
