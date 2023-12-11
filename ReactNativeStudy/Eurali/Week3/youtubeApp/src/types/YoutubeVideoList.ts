import {YoutubeVideo} from './YoutubeVideo';

export interface YoutubeVideoList {
  kind: string;
  etag: 'etag';
  nextPageToken: string; // 사용
  prevPageToken?: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: YoutubeVideo[];
}
