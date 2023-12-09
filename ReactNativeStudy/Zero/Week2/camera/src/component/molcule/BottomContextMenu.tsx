import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';

import { COLOR, GRADIENT } from '../../constants/color';

import { Icon } from '../atom/Icon';
import ImageUploadByCameraButton from './ImageUploadByCameraButton';
import ImageUploadByGalleryButton from './ImageUploadByGalleryButton';

function BottomContextMenu() {
    const [modalVisible, setModalVisible] = useState(false);

    const showModal = () => setModalVisible(true);
    const hideModal = () => setModalVisible(false);

    return (
        <View>
            <TouchableOpacity
                onPress={showModal}
                style={styles.button}
            >
                <Icon name="Plus" size={60} fill={GRADIENT.Gradient100} />
            </TouchableOpacity>
            <Modal
                isVisible={modalVisible}
                onBackdropPress={hideModal}
                onBackButtonPress={hideModal}
                backdropOpacity={0.6}
            >
                <SafeAreaView
                    style={styles.modal}
                >
                    <ImageUploadByCameraButton styles={styles} hideModal={hideModal} />
                    <ImageUploadByGalleryButton styles={styles} hideModal={hideModal} />
                </SafeAreaView>
            </Modal>
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
        height: 170,
        width: '100%',
        paddingHorizontal: 24,
        paddingVertical: 40,
        gap: 30,
        position: 'absolute',
        bottom: 0,
    },
    button: {
        position: 'absolute',
        bottom: 30,
        alignSelf: 'center',
    },
    text: {
        color: COLOR.White,
        fontSize: 16,
    },
    modalButton: {
        flexDirection: 'row',
        gap: 4,
    }
});

export default BottomContextMenu
