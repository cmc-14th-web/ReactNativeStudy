import { StyleSheet, View } from "react-native";
import { COLOR } from "../constant/color";
import VideoItem from "../component/VideoItem";
import { useSelectedVideoStore } from "../store/selectedVideoStore";

function Detail() {
    const selectedVideo = useSelectedVideoStore(state => state.selectedVideo);

    return (
        <View style={style.container}>
            <VideoItem videoInfo={selectedVideo} isVideo />
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: COLOR.Gray900,
        height: '100%',
    }
});

export default Detail;
