import {youtubeApiClient} from '.';
import {VideosResponse} from '../videoResponse';

type GetSearchResultVideosProps = {
  pageParam?: string;
  searchText: string;
  maxResults?: number;
};

export default async function getSearchResultVideos({
  pageParam = '',
  searchText,
  maxResults = 5,
}: GetSearchResultVideosProps): Promise<VideosResponse> {
  const {data} = await youtubeApiClient.get('/search?type=video', {
    params: {
      maxResults,
      q: searchText,
      pageToken: pageParam,
    },
  });

  return data;
}
