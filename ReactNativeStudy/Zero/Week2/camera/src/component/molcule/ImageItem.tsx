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

    return (
        <Pressable
            onPress={() => {
                navigation.navigate('ImageDetail', { image: image });
            }}>
            <Image source={{ uri: image.uri }} style={{ width: width, aspectRatio: 1 / 1 }} />
        </Pressable>
    )
}

export default ImageItem;
