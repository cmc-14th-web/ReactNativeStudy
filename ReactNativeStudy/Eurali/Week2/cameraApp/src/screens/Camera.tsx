import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Camera, useCameraDevice} from 'react-native-vision-camera';

const CameraScreen = () => {
  const device = useCameraDevice('back');

  if (device == null) {
    return <Text>No Camera Device</Text>;
  }
  return (
    <View style={{flex: 1}}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        photo={true}
      />
    </View>
  );
};

export default CameraScreen;
