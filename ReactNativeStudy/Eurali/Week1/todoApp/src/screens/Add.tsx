import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import ScreenLayout from '../layout/screenLayout';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import {textChange} from '../store/textSlice';

const Add = () => {
  //const [text, setText] = useState('');
  const text = useSelector((state: RootState) => state.text.text);
  const dispatch = useDispatch();

  const handleChangeText = (inputText: string) => {
    dispatch(textChange(inputText));
  };
  return (
    <ScreenLayout>
      <TextInput
        onChangeText={handleChangeText}
        value={text}
        style={{
          borderRadius: 20,
          backgroundColor: 'white',
          paddingHorizontal: 20,
          paddingVertical: 16,
        }}
      />
    </ScreenLayout>
  );
};

export default Add;
