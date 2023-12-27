import React from 'react';
import {TouchableOpacity} from 'react-native';
import SvgIcons from '../assets/icons/SvgIcons';
import {StyleSheet} from 'react-native';
import COLORS from '../constants/colors';
import favoriteStore, {StoreType} from '../store';
import {ACTIVATED, NOT_ACTIVATED} from '../constants/state';

const FavoriteButton = ({activated}: {activated: boolean}) => {
  const curState = favoriteStore((state: StoreType) => state.curState);
  const setCurState = favoriteStore((state: StoreType) => state.setCurState);
  const curPos = favoriteStore((state: StoreType) => state.curPos);
  const setFavorites = favoriteStore((state: StoreType) => state.setFavorites);
  const removeFavorites = favoriteStore(
    (state: StoreType) => state.removeFavorites,
  );

  const handleClickButton = () => {
    if (curState === ACTIVATED) {
      setCurState(NOT_ACTIVATED);
      removeFavorites(curPos);
    } else {
      setCurState(ACTIVATED);
      setFavorites(curPos);
    }
  };

  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        backgroundColor: activated ? COLORS.BLUE_600 : COLORS.GRAY_600,
      }}
      onPress={handleClickButton}>
      <SvgIcons.WhiteStarIcon />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 30,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 10,
    top: 20,
    borderRadius: 100,
    padding: 16,
  },
});

export default FavoriteButton;
