import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';

export default function CameraScreen() {
  const device = useCameraDevice('back');
  const {hasPermission, requestPermission} = useCameraPermission();

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView>
      {(() => {
        if (!hasPermission) {
          return <Text>Camera permission denied</Text>;
        }
        if (!device) {
          return <Text>No camera devices</Text>;
        }
        return (
          <Camera
            style={StyleSheet.absoluteFill}
            device={device}
            isActive
            photo
          />
        );
      })()}
    </SafeAreaView>
  );
}
