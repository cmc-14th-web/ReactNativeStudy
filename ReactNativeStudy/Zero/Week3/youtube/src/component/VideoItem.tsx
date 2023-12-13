import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { COLOR } from "../constant/color";
import { videoInfo } from "../type/videoInfo";
import { useNavigation } from "@react-navigation/native";
import { useSelectedVideoStore } from "../store/selectedVideoStore";
import { getFormattedDate, getFormattedViewCount } from "../util/formatVideoData";
import VideoPlayer from "./VideoPlayer";
import { mediaAspectRatio } from "../constant/screen";

interface VideoItemProps {
    isVideo?: boolean;
    videoInfo: videoInfo;
}

function VideoItem({ videoInfo, isVideo }: VideoItemProps) {
    const { snippet, statistics } = videoInfo;
    const { thumbnails, title, channelTitle, publishedAt } = snippet;
    const { viewCount } = statistics || { viewCount: 0 };

    const formattedViewCount = getFormattedViewCount(viewCount);
    const formattedPublishedAt = getFormattedDate(publishedAt);

    const navigation = useNavigation();
    const setSelectedVideo = useSelectedVideoStore(state => state.setSelectedVideo);
    const handlePress = () => {
        navigation.navigate('DetailStack')
        setSelectedVideo(videoInfo);
    }

    const renderVideoOrImage = () => {
        if (isVideo) {
            return <VideoPlayer />
        }

        return <Image source={{ uri: thumbnails.medium.url }} style={style.image} />
    }

    return (
        <Pressable onPress={handlePress}>
            <View style={style.container}>
                {renderVideoOrImage()}
                <View style={style.textContainer}>
                    <Text style={style.title}>{title}</Text>
                    <Text style={style.detail}>{channelTitle} · 조회수 {formattedViewCount} · {formattedPublishedAt}</Text>
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
