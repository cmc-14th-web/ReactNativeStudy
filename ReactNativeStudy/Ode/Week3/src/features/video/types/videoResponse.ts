import {Video} from './video';

export type VideosResponse = {
  kind: string;
  etag: 'etag';
  nextPageToken: string;
  prevPageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: Video[];
};
