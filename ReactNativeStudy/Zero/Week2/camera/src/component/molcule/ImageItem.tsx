import { Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { Image as ImageData } from "../../type/image";

import { HomeStackParamList } from "../../navigation/HomeStack";

interface ImageItemProps {
    image: ImageData;
    width: number;
}

function ImageItem({ image, width }: ImageItemProps) {
    const navigation = useNavigation<StackNavigationProp<HomeStackParamList>>();
    const handleShowImageDetail = () => {
        navigation.navigate('ImageDetailStackScreen', { image: image });
    }

    return (
        <Pressable
            onPress={handleShowImageDetail}>
            <Image source={{ uri: image.uri }} style={{ width: width, aspectRatio: 1 / 1 }} />
        </Pressable>
    )
}

export default ImageItem;
