import {instance, videoParams} from '.';
import {YoutubeVideoList} from '../types/video';

const getVideos = async (): Promise<YoutubeVideoList | undefined> => {
  try {
    const response = await instance.get('/videos', {
      params: videoParams,
    });
    return response.data.items;
  } catch (error) {
    console.error(error);
  }
};

export default getVideos;
