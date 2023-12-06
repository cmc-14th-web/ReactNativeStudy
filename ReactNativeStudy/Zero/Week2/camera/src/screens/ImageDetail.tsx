import { Image, View } from "react-native";

import BackgroundContainer from "../component/atom/BackgroundContainer";
import Header from "../component/molcule/Header";
import { StackScreenProps } from "@react-navigation/stack";
import { HomeStackParamList } from "../navigation/HomeStack";

type ImageDetailProps = StackScreenProps<HomeStackParamList, 'ImageDetail'>;

function ImageDetail({ route }: ImageDetailProps) {
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
