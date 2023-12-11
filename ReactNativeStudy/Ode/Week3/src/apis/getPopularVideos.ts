import {QueryFunctionContext} from '@tanstack/react-query';
import {youtubeApiClient} from '.';
import {VideosResponse} from '../types/videoResponse';

export default async function getPopularVideos({
  queryKey,
}: QueryFunctionContext): Promise<VideosResponse> {
  const [, maxResults] = queryKey;

  const {data} = await youtubeApiClient.get('/videos?&chart=mostPopular', {
    params: {maxResults},
  });
  return data;
}
