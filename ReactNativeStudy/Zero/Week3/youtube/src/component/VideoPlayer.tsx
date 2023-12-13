import { mediaAspectRatio, windowWidth } from "../constant/screen";
import { useSelectedVideoStore } from "../store/selectedVideoStore";
import YoutubePlayer from 'react-native-youtube-iframe';

function VideoPlayer() {
    const selectedVideo = useSelectedVideoStore(state => state.selectedVideo);
    const calculateVideoHeight = windowWidth / mediaAspectRatio;

    return (
        <YoutubePlayer
            play={true}
            videoId={selectedVideo.id.videoId || selectedVideo.id}
            height={calculateVideoHeight}
        />
    );
}

export default VideoPlayer;
