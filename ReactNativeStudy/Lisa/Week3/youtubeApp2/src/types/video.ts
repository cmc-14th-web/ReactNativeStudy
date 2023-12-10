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

export type VideoDetailPropsType = {
  publishedAt: string;
  title: string;
  thumbnailUrl: string;
  channelTitle: string;
};

export type VideoListItemPropsType = {
  videoList: VideoType[];
};
