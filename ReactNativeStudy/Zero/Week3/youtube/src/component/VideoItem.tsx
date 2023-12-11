import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { COLOR } from "../constant/color";
import { videoInfo } from "../type/videoInfo";

interface VideoItemProps {
    videoInfo: videoInfo;
}

function VideoItem({ videoInfo }: VideoItemProps) {
    const { snippet, statistics } = videoInfo;
    const { thumbnails, title, channelTitle, publishedAt } = snippet;
    const { viewCount } = statistics;

    return (
        <Pressable onPress={() => console.log('press')}>
            <View style={style.container}>
                <Image source={{ uri: thumbnails.medium.url }}
                    style={{
                        width: '100%',
                        aspectRatio: '16/9',
                    }}
                />
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
        aspectRatio: '16/9',
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
