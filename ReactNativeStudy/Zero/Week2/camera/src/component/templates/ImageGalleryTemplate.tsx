import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { useState } from "react";

import { Image } from "../../type/image";
import { IMAGE_GALLERY_COLUMN, IMAGE_GALLERY_MARGIN } from "../../constants/size";

import ImageItem from "../molcule/ImageItem";

interface ImageGalleryTemplateProps {
    images: Image[];
}

function ImageGalleryTemplate({ images }: ImageGalleryTemplateProps) {
    const [width, setWidth] = useState(0);

    const calculateWidth = () => {
        return (width - IMAGE_GALLERY_MARGIN * 2) / IMAGE_GALLERY_COLUMN;
    }

    return (
        <SafeAreaView
            style={style.container}
        >
            <FlatList
                key={'#'}
                data={images}
                onLayout={(event) => setWidth(event.nativeEvent.layout.width)}
                renderItem={({ item }) => <ImageItem image={item} width={calculateWidth()} />}
                keyExtractor={(_, index) => index.toString()}
                numColumns={IMAGE_GALLERY_COLUMN}
            />
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        marginTop: 74,
        marginHorizontal: IMAGE_GALLERY_MARGIN,
        flex: 1,
        width: '100%'
    }
})

export default ImageGalleryTemplate;
