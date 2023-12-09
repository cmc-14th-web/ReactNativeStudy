import {View} from 'react-native';

import {imageStore} from 'libs/store/images';
import ImageListItem from 'components/Home/ImageListItem';
import NoImage from 'components/Home/NoImage';

const Home = () => {
  const {images} = imageStore();

  return (
    <View>
      {images.length ? <ImageListItem images={images} /> : <NoImage />}
    </View>
  );
};

export default Home;
