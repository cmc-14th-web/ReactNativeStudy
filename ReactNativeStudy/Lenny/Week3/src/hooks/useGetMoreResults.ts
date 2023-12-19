import getMoreInformation from '../apis/getMoreInformation';
import {useStore} from '../store/store';
import {SnippetVideosType} from '../types/videos';
import extractVideoData from '../utils/extractVideoData';
import {useGetSearchResults} from './useGetSearchResults';

interface VideoIdProp {
  id: {videoId: string};
}

export const useGetMoreResults = () => {
  const {searchResults, setSearchResults} = useStore();
  const {fetchNextPage} = useGetSearchResults();

  const getMoreResults = async () => {
    const refetch: any = await fetchNextPage();
    if (refetch.isSuccess) {
      const totalPageParamsLength = refetch.data.pageParams.length;
      const videoIDs: string[] = [];
      refetch.data.pages[totalPageParamsLength - 1].items.map(
        (item: VideoIdProp) => videoIDs.push(item.id.videoId),
      );

      try {
        (async () => {
          const insideRefetch: any = await getMoreInformation(
            videoIDs.join(','),
          );
          const {items} = insideRefetch;
          const searchResultsValues: SnippetVideosType[] =
            extractVideoData(items);
          setSearchResults([...searchResults, ...searchResultsValues]);
        })();
      } catch (err) {
        console.log(err, 'try catch 내부');
      }
    }
  };

  return {getMoreResults};
};
