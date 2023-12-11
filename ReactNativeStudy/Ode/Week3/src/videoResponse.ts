import {Video} from './video';

export type VideosResponse = {
  kind: string;
  etag: 'etag';
  nextPageToken: string; // 사용
  prevPageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: Video[];
};
