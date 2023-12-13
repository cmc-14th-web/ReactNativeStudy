import { StyleSheet, Text, View } from "react-native";

import { COLOR } from "../constant/color";
import { useGetMostPopularVideoList } from "../api/mostPopularVideo";
import { videoInfo } from "../type/videoInfo";

import VideoItem from "../component/VideoItem";
import Header from "../component/Header";

function Home() {
    const { mostPopularVideoList, isLoading, error } = useGetMostPopularVideoList();
    return (
        <View style={{
            backgroundColor: COLOR.Gray900,
            height: '100%',
        }}>
            <Header />
            <Text style={style.listTitle}>
                인기 동영상
            </Text>
            {mostPopularVideoList?.map((videoInfo: videoInfo) => {
                return <VideoItem key={videoInfo.id} videoInfo={videoInfo} />
            })}
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
