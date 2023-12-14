export interface YoutubeVideo {
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
}

export interface YoutubeVideoList {
  kind: string;
  etag: 'etag';
  nextPageToken: string;
  prevPageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: YoutubeVideo[];
}

export type VideoInfo = {
  publishedAt: string;
  title: string;
  url: string;
  channelTitle: string;
};
