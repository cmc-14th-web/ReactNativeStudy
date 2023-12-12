import {YOUTUBE_API_KEY} from '@env';
import {useMutation} from '@tanstack/react-query';
import axios from 'axios';
import {useStore} from '../store/store';
import {snippetVideosType, videosType} from '../types/trendingVideos';
import {calculatePublishedTime} from '../utils/calculatePublishedTime';

const getSearchResult = async (
  nextPageToken: string,
  searchContent: string,
) => {
  const response = await axios.get(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${searchContent}&maxResult=5&key=${YOUTUBE_API_KEY}&pageToken=${nextPageToken}`,
  );
  return response.data;
};

const getMoreInformation = async (moreInformations: string) => {
  const response = await axios.get(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&key=${YOUTUBE_API_KEY}`,
    {
      params: {
        id: moreInformations,
      },
    },
  );
  return response.data;
};

const useGetMoreInformation = () => {
  const {searchResults, setSearchResults} = useStore();
  const {
    isSuccess,
    data,
    mutate: getMoreInformationMutaion,
  } = useMutation({
    mutationFn: getMoreInformation,
    onSuccess: res => {
      const {items} = res;
      const trendingVideosValues: snippetVideosType[] = items.map(
        (item: videosType) => {
          return {
            viewCount: item.statistics.viewCount, // 조회수
            channelTitle: item.snippet.channelTitle, // 채널 이름
            title: item.snippet.title, // 제목
            thumbnails: item.snippet.thumbnails, // 썸네일 사진 정보
            publishedAt: calculatePublishedTime(item.snippet.publishedAt), // 업로드 날짜
          };
        },
      );
      setSearchResults([...searchResults, ...trendingVideosValues]);
    },
    onError: err => console.log(err),
  });

  return {
    isSuccess,
    data,
    getMoreInformationMutaion,
  };
};

export const useGetSearchResult = () => {
  const {nextPageToken, setNextPageToken} = useStore();
  const {getMoreInformationMutaion} = useGetMoreInformation();
  const {mutate: searchContentMutation} = useMutation({
    mutationFn: (searchContent: string) =>
      getSearchResult(nextPageToken, searchContent),
    onSuccess: res => {
      const param: any = [];
      setNextPageToken(res.nextPageToken);
      res.items.map((item: any) => param.push(item.id.videoId));
      getMoreInformationMutaion(param.join(','));
    },
    onError: err => console.log(err),
  });

  return {
    searchContentMutation,
  };
};
