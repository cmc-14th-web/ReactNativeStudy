import BackgroundContainer from "../component/atom/BackgroundContainer";
import Header from "../component/molcule/Header";
import { Image as ImageData } from "../type/image";
import { Image, View } from "react-native";

function ImageDetail({ route }) {
    const { image } = route.params;

    return (
        <BackgroundContainer>
            <Header title={image.date} isBackButton />
            <View
                style={{
                    flex: 1,
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Image source={{ uri: image.uri }} style={{
                    width: '100%',
                    maxHeight: 515,
                    resizeMode: 'contain',
                    alignSelf: 'center',
                    height: '100%',
                    marginTop: 60,
                }} />
            </View>
        </BackgroundContainer>
    )
}

export default ImageDetail;
