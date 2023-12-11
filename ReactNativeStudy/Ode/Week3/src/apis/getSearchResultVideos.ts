import {youtubeApiClient} from '.';
import {VideosResponse} from '../types/videoResponse';

type GetSearchResultVideosProps = {
  pageToken?: string;
  searchText: string;
  maxResults?: number;
};

export default async function getSearchResultVideos({
  pageToken = '',
  searchText,
  maxResults = 5,
}: GetSearchResultVideosProps): Promise<VideosResponse> {
  const {data} = await youtubeApiClient.get('/search?type=video', {
    params: {
      maxResults,
      q: searchText,
      pageToken,
    },
  });
  return data;
}
