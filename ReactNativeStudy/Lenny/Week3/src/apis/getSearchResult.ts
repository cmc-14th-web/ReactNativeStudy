import {YOUTUBE_API_KEY} from '@env';
import baseAxios from './baseAxios';

interface SearchResultsProps {
  pageParam: {nextPageToken: string; searchContent: string};
}

const getSearchResult = async ({pageParam}: SearchResultsProps) => {
  const {nextPageToken, searchContent} = pageParam;
  const response = await baseAxios.get(
    `search?part=snippet&type=video&q=${searchContent}&maxResult=5&key=${YOUTUBE_API_KEY}&pageToken=${nextPageToken}`,
  );
  return response.data;
};

export default getSearchResult;
