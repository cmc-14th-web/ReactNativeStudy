import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import useStar, {Star as StarType} from '../store/useStar';
import IconFactory from '../components/IconFactory';
import palette from '../utils/palette';

const Star = () => {
  const starState = useStar(state => state);
  return (
    <ScreenContainer>
      {starState.stars.map((star: StarType, index) => (
        <View
          key={`${star.latitude}${star.longitude}${index}`}
          style={{flexDirection: 'row'}}>
          <Text>{star.roadAddress ?? 'NO_CONTENT'}</Text>
          <TouchableOpacity
            onPress={() => {
              starState.removeStar(star);
            }}>
            <IconFactory icon="Trash" fill={palette.Gray600} />
          </TouchableOpacity>
        </View>
      ))}
    </ScreenContainer>
  );
};

export default Star;
