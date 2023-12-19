import React from 'react';
import {Text, View} from 'react-native';
import {useRecoilValue} from 'recoil';
import VideoList from '../components/VideoList';
import {useSearchVideo} from '../hooks/useSearchVideo';
import {keywordState} from '../recoil/keywordAtom';

const Search = () => {
  const keyword = useRecoilValue(keywordState);

  const {searchData, isLoading, isError} = useSearchVideo(keyword);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error!</Text>;
  }

  return (
    <View>
      <VideoList searchData={searchData} />
    </View>
  );
};

export default Search;
