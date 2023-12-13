import { View } from "react-native";
import { useSelectedVideoStore } from "../store/selectedVideoStore";
import YoutubePlayer from 'react-native-youtube-iframe';

function Detail() {
    const selectedVideo = useSelectedVideoStore(state => state.selectedVideo);

    return (
        <View>
            <YoutubePlayer
                height={300}
                play={true}
                videoId={selectedVideo.id.videoId || selectedVideo.id}
            />
        </View>
    );
}

export default Detail;
