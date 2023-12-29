import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Modal as RNModal,
} from 'react-native';

type ModalProps = {
  children: React.ReactNode;
  negativeButton: string;
  positiveButton: string;
  negativeButtonPress: () => void;
  positiveButtonPress: () => void;
  isVisible: boolean;
};

const Modal = ({
  children,
  negativeButton,
  positiveButton,
  negativeButtonPress,
  positiveButtonPress,
  isVisible,
}: ModalProps) => {
  return (
    <RNModal transparent visible={isVisible} animationType="slide">
      <View style={styles.container}>
        <View style={styles.contentContainer}>{children}</View>
        <View style={styles.buttonContainer}>
          {negativeButton && (
            <TouchableOpacity
              style={styles.negativeButton}
              onPress={negativeButtonPress}>
              <Text style={styles.text}>{negativeButton}</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={styles.positiveButton}
            onPress={positiveButtonPress}>
            <Text style={styles.text}>{positiveButton}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    width: 280,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  positiveButton: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'green',
  },
  negativeButton: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'red',
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
});

export default Modal;
