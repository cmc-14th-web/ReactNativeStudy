import {YOUTUBE_API_KEY} from '@env';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Keyboard, Text} from 'react-native';
import Container from '../components/Container';
import Header from '../components/search/Header';

export default function SearchScreen() {
  // const [nextPageToken, setNextPageToken] = useState<string>('');
  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=강아지&maxResult=5&key=${YOUTUBE_API_KEY}&pageToken=${nextPageToken}`,
  //     )
  //     .then(res => {
  //       console.log(res);
  //       setNextPageToken(res.data.nextPageToken);
  //     })
  //     .catch(err => console.log(err));
  // }, [nextPageToken]);
  return (
    <Container>
      <Header />
      <Text>SearchScreen</Text>
    </Container>
  );
}
