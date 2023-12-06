import { FlatList, SafeAreaView } from "react-native";
import { Image } from "../../type/image";
import ImageItem from "../molcule/ImageItem";
import { useState } from "react";

interface ImageGalleryTemplateProps {
    images: Image[];
}

function ImageGalleryTemplate({ images }: ImageGalleryTemplateProps) {
    const [width, setWidth] = useState(0);
    const MARGIN = 16;
    const COLUMN = 3;
    const calculateWidth = () => {
        return (width - MARGIN * 2) / COLUMN;
    }

    return (
        <SafeAreaView
            style={{
                marginTop: 74,
                marginHorizontal: 16,
                flex: 1,
                width: '100%'
            }}
        >
            <FlatList
                key={'#'}
                data={images}
                onLayout={(event) => setWidth(event.nativeEvent.layout.width)}
                renderItem={({ item }) => <ImageItem image={item}
                    width={calculateWidth()}
                />}
                keyExtractor={(item, index) => index.toString()}
                numColumns={3}
            />
        </SafeAreaView>
    )
}

export default ImageGalleryTemplate;
