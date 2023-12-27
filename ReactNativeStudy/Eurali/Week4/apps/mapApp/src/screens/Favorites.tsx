import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SvgIcons from '../assets/icons/SvgIcons';
import COLORS from '../constants/colors';
import favoriteStore, {StoreType} from '../store';
import AddressContainer from '../components/AddressTextContainer';

const Favorites = () => {
  const favorites = favoriteStore((state: StoreType) => state.favorites);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.starIcon}>
          <SvgIcons.WhiteStarIcon />
        </View>
        <Text style={styles.favoriteText}>즐겨찾기</Text>
      </View>
      <View style={styles.bottomContainer}>
        {favorites &&
          favorites.map((fav, index) => (
            <React.Fragment key={index}>
              <AddressContainer favoriteItem={fav} />
              {index < favorites.length - 1 && <View style={styles.hr} />}
            </React.Fragment>
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLUE_100,
  },
  topContainer: {
    height: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  starIcon: {
    width: 30,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    padding: 16,
    backgroundColor: COLORS.BLUE_600,
    margin: 20,
  },
  favoriteText: {
    borderColor: COLORS.BLACK,
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: COLORS.BLACK,
    fontSize: 14,
    fontWeight: '500',
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  hr: {
    borderBottomColor: COLORS.BLUE_200,
    borderBottomWidth: 1,
  },
});

export default Favorites;
