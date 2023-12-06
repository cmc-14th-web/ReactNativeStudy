import { Image, View } from "react-native";
import { Image as ImageData } from "../../type/image";

interface ImageItemProps {
    image: ImageData;
    width: number;
}

function ImageItem({ image, width }: ImageItemProps) {
    return (
        <Image source={{ uri: image.uri }} style={{ width: width, aspectRatio: 1 / 1 }} />
    )
}

export default ImageItem;
