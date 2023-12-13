type ThumbnailsType = {
  url: string;
  width: number;
  height: number;
};

export type SnippetVideosType = {
  viewCount: string;
  channelTitle: string;
  title: string;
  thumbnails: {
    default: ThumbnailsType;
    high: ThumbnailsType;
    maxres: ThumbnailsType;
    medium: ThumbnailsType;
    standard: ThumbnailsType;
  };
  publishedAt: string;
};

type StatisticsTrendingVideosType = {
  viewCount: string;
};

export type VideosType = {
  snippet: SnippetVideosType;
  statistics: StatisticsTrendingVideosType;
};

export type UsingVideosType = ArrayLike<SnippetVideosType>;
