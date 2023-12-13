import Config from 'react-native-config';

import {axiosInstance} from './axiosInstance';
import {SearchedVideoListType, VideoType} from 'types/video';

export const VideoApi = {
  GET_POPULAR_VIDEOS: async (maxResults = 25): Promise<VideoType[]> => {
    const response = await axiosInstance.get(
      `/videos?part=snippet&chart=mostPopular&maxResults=${maxResults}&key=${Config.API_KEY}`,
    );

    return response.data.items;
  },

  GET_SEARCHED_VIDEOS: async (
    searchText: string,
    nextPageToken: string,
    maxResults = 5,
  ): Promise<SearchedVideoListType> => {
    const response = await axiosInstance.get(
      `/search?part=snippet&type=video&q=${searchText}&maxResults=${maxResults}&key=${Config.API_KEY}&pageToken=${nextPageToken}`,
    );

    return {
      items: response.data.items,
      nextPageToken: response.data.nextPageToken,
    };
  },
};
