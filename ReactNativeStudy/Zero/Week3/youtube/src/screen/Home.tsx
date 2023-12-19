import { FlatList, StyleSheet, Text, View } from "react-native";

import { COLOR } from "../constant/color";
import { useGetMostPopularVideoList } from "../api/mostPopularVideo";
import { FormattedVideoInfo } from "../type/videoInfo";
import { getFormattedVideoDatas } from "../util/formatVideoData";

import VideoItem from "../component/VideoItem";
import Header from "../component/Header";
import Error from "../component/Error";

function Home() {
    const { mostPopularVideoList, isLoading, error } = useGetMostPopularVideoList();

    if (isLoading) {
        return <Text>로딩중</Text>
    }

    const renderVideoListOrError = () => {
        if (error) {
            return <Error />
        }

        return (
            <FlatList
                data={getFormattedVideoDatas(mostPopularVideoList)}
                renderItem={({ item }: { item: FormattedVideoInfo }) => <VideoItem videoInfo={item} />}
                keyExtractor={(item: FormattedVideoInfo) => item.id}
            />
        )
    }

    return (
        <View style={{
            backgroundColor: COLOR.Gray900,
            height: '100%',
        }}>
            <Header />
            <Text style={style.listTitle}>
                인기 동영상
            </Text>
            {renderVideoListOrError()}
            <Error />
        </View>
    )
}

const style = StyleSheet.create({
    listTitle: {
        color: COLOR.Red,
        fontSize: 18,
        fontWeight: '600',
        paddingHorizontal: 18,
        paddingVertical: 10,
    }
});

export default Home;
