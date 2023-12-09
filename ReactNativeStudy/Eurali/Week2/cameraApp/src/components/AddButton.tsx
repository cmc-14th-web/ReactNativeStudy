import React from 'react';
import {TouchableOpacity, Dimensions, StyleSheet} from 'react-native';
import AddIcon from '../assets/icons/add.svg';
import useStore from '../store';

const {width} = Dimensions.get('window');

const AddButton = () => {
  const setIsClosed = useStore(state => state.setIsClosed);

  const handleClickAdd = () => {
    setIsClosed(false);
  };
  return (
    <TouchableOpacity style={styles.addButton} onPress={handleClickAdd}>
      <AddIcon />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    bottom: 20,
    left: (width - 50) / 2,
  },
});

export default AddButton;
