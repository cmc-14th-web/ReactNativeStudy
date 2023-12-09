import { TouchableOpacity, Text } from "react-native";
import ImagePicker from 'react-native-image-crop-picker';

import { COLOR } from "../../constants/color";
import { IMAGE_CROP_SIZE } from "../../constants/size";
import { useImages } from "../../hooks/useImages";

import { Icon } from "../atom/Icon";
import { ImageUploadButtonProps } from "./ImageUploadByCameraButton";

function ImageUploadByGalleryButton({ styles, hideModal }: ImageUploadButtonProps) {
    const { createImage } = useImages();

    const handleGallery = () => {
        ImagePicker.openPicker({
            width: IMAGE_CROP_SIZE,
            height: IMAGE_CROP_SIZE,
            multiple: true,
            compressImageQuality: 0.5,
        }).then(async images => {
            for await (const image of images) {
                const croppedImage = await ImagePicker.openCropper({
                    mediaType: 'photo',
                    path: image.path,
                    width: IMAGE_CROP_SIZE,
                    height: IMAGE_CROP_SIZE,
                });
                createImage(croppedImage.path);
            }
        }).finally(hideModal);
    }

    return (
        <TouchableOpacity style={styles.modalButton} onPress={handleGallery}>
            <Icon name="Gallery" size={16} fill={COLOR.White} />
            <Text style={styles.text}>갤러리에서 선택하기</Text>
        </TouchableOpacity>
    )
}

export default ImageUploadByGalleryButton;
