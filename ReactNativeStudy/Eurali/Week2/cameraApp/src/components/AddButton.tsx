import React from 'react';
import {TouchableOpacity, Dimensions} from 'react-native';
import AddIcon from '../assets/icons/add.svg';
import useStore from '../store';

const {width} = Dimensions.get('window');

const AddButton = () => {
  const setIsClosed = useStore(state => state.setIsClosed);

  const handleClickAdd = () => {
    console.log('clicked');
    setIsClosed(false);
  };
  return (
    <TouchableOpacity
      style={{position: 'absolute', bottom: 20, left: (width - 50) / 2}}
      onPress={handleClickAdd}>
      <AddIcon />
    </TouchableOpacity>
  );
};

export default AddButton;
