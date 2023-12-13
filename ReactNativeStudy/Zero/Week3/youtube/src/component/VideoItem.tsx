import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { COLOR } from "../constant/color";
import { mediaAspectRatio } from "../constant/screen";
import { FormattedVideoInfo } from "../type/videoInfo";
import { useSelectedVideoStore } from "../store/selectedVideoStore";
import { useNavigator } from "../hook/useNavigator";

import VideoPlayer from "./VideoPlayer";

interface VideoItemProps {
    isVideo?: boolean;
    videoInfo: FormattedVideoInfo;
}

function VideoItem({ videoInfo, isVideo }: VideoItemProps) {
    const { title, channelTitle, thumbnail, viewCount, publishedAt } = videoInfo;

    const setSelectedVideo = useSelectedVideoStore(state => state.setSelectedVideo);
    const { stackNavigator } = useNavigator();
    const handlePress = () => {
        stackNavigator.navigate('DetailStack')
        setSelectedVideo(videoInfo);
    }

    const renderVideoOrImage = () => {
        if (isVideo) {
            return <VideoPlayer />
        }

        return <Image source={{ uri: thumbnail }} style={style.image} />
    }

    return (
        <Pressable onPress={handlePress}>
            <View style={style.container}>
                {renderVideoOrImage()}
                <View style={style.textContainer}>
                    <Text style={style.title}>{title}</Text>
                    <Text style={style.detail}>{channelTitle} · 조회수 {viewCount} · {publishedAt}</Text>
                </View>
            </View>
        </Pressable>
    );
}

const style = StyleSheet.create({
    container: {
        paddingVertical: 10,
        gap: 12,
    },
    image: {
        width: '100%',
        aspectRatio: mediaAspectRatio,
    },
    textContainer: {
        paddingHorizontal: 18,
        gap: 6,
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
        color: COLOR.Gray100,
    },
    detail: {
        fontSize: 12,
        fontWeight: '500',
        color: COLOR.Gray600,
    }
})

export default VideoItem;
