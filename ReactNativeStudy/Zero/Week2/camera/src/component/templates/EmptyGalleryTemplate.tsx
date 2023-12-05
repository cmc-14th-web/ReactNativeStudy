import { View, Text, StyleSheet } from 'react-native'
import { COLOR } from '../../constants/color';

function EmptyGalleryTemplates() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>업로드한 사진이 없습니다.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
        color: COLOR.Gray400,
    },
});

export default EmptyGalleryTemplates
