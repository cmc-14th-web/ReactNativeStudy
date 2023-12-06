import { TouchableOpacity, Text } from "react-native";
import ImagePicker from 'react-native-image-crop-picker';

import { COLOR } from "../../constants/color";
import { IMAGE_CROP_SIZE } from "../../constants/size";
import { useImages } from "../../hooks/useImages";

import { Icon } from "../atom/Icon";

export interface ImageUploadButtonProps {
    styles: any;
    hideModal: () => void;
}

function ImageUploadByCameraButton({ styles, hideModal }: ImageUploadButtonProps) {
    const { createImage } = useImages();

    const handleCamera = () => {
        ImagePicker.openCamera({
            width: IMAGE_CROP_SIZE,
            height: IMAGE_CROP_SIZE,
            cropping: true,
        }).then(image => {
            createImage(image.path);
        }).finally(hideModal);
    }

    return (
        <TouchableOpacity style={styles.modalButton} onPress={handleCamera}>
            <Icon name="Camera" size={24} fill={COLOR.White} />
            <Text style={styles.text}>카메라로 촬영하기</Text>
        </TouchableOpacity>
    )
}

export default ImageUploadByCameraButton;
