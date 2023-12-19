import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query';

export type VideoType = {
  kind: string;
  etag: 'etag';
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      medium: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
    localized: {
      title: string;
      description: string;
    };
    defaultAudioLanguage: string;
  };
};

export type VideoListType = {
  kind: VideoType['kind'];
  etag: VideoType['etag'];
  nextPageToken: string;
  prevPageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: VideoType[];
};

export type SearchedVideoListType = {
  nextPageToken: VideoListType['nextPageToken'];
  items: VideoListType['items'];
};

export type VideoDetailPropsType = {
  publishedAt: VideoType['snippet']['publishedAt'];
  title: VideoType['snippet']['title'];
  thumbnailUrl: VideoType['snippet']['thumbnails']['medium']['url'];
  channelTitle: VideoType['snippet']['channelTitle'];
};

export type VideoListItemVariant = 'search' | 'popular';

export type VideoListItemPropsType<T extends VideoListItemVariant> = {
  videoList: VideoType[];
  variant?: T;
  fetchNextPage?: T extends 'search'
    ? (
        options?: FetchNextPageOptions,
      ) => Promise<InfiniteQueryObserverResult<SearchedVideoListType, unknown>>
    : undefined;
};
