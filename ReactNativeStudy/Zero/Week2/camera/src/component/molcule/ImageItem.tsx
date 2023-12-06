import { Image, Pressable, View } from "react-native";
import { Image as ImageData } from "../../type/image";
import { useNavigation } from "@react-navigation/native";

interface ImageItemProps {
    image: ImageData;
    width: number;
}

function ImageItem({ image, width }: ImageItemProps) {
    const navigation = useNavigation();

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
