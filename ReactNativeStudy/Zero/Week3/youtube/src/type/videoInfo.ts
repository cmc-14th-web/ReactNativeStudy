export type VideoInfo = {
  id: string | {videoId: string};
  snippet: {
    title: string;
    channelTitle: string;
    publishedAt: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
  statistics?: {
    viewCount: number;
  };
};

export type FormattedVideoInfo = {
  id: string;
  title: string;
  channelTitle: string;
  publishedAt: string;
  thumbnail: string;
  viewCount: string;
};
