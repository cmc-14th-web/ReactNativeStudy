import React, { useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from '../atom/Icon';
import { COLOR, GRADIENT } from '../../constants/color';
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-crop-picker';

function BottomContextMenu() {
    const [modalVisible, setModalVisible] = useState(false);
    const [uri, setUri] = useState<string>();

    const handleCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        })
            .then(image => {
                setUri(image.path);
            })
            .finally(() => setModalVisible(false));
    }

    const handleGallery = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
        })
            .then(image => {
                setUri(image.path);
            })
            .finally(() => setModalVisible(false));
    }

    return (
        <View>
            <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={styles.button}
            >
                <Icon name="Plus" size={60} fill={GRADIENT.Gradient100} />
            </TouchableOpacity>
            <View
            >
                {uri && <Image source={{ uri }} style={{ width: 100, height: 100 }} />}
                <Modal
                    isVisible={modalVisible}
                    onBackdropPress={() => setModalVisible(false)}
                    onBackButtonPress={() => setModalVisible(false)}
                    backdropOpacity={0.3}
                    style={styles.modal}
                >
                    <SafeAreaView>
                        <TouchableOpacity style={styles.modalButton} onPress={handleCamera}>
                            <Icon name="Camera" size={24} fill={COLOR.White} />
                            <Text style={styles.text}>카메라로 촬영하기</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalButton} onPress={handleGallery}>
                            <Icon name="Gallery" size={16} fill={COLOR.White} />
                            <Text style={styles.text}>갤러리에서 선택하기</Text>
                        </TouchableOpacity>
                    </SafeAreaView>
                </Modal>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    modal: {
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        backgroundColor: COLOR.Gray600,
        boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.20)',
        justifyContent: 'flex-end',
        margin: 0,
        height: 200,
    },
    button: {
        position: 'absolute',
        bottom: 30,
        alignSelf: 'center',
    },
    text: {
        color: COLOR.White,
    },
    modalButton: {
        flexDirection: 'row',
    }
});

export default BottomContextMenu
