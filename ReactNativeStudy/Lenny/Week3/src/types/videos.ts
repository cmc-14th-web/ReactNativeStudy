type ThumbnailsType = {
  url: string;
  width: number;
  height: number;
};

export interface VideoDetailType {
  videoId: string;
  viewCount: string;
  channelTitle: string;
  title: string;
  publishedAt: string;
}

export interface SnippetVideosType extends VideoDetailType {
  thumbnails: {
    default: ThumbnailsType;
    high: ThumbnailsType;
    maxres: ThumbnailsType;
    medium: ThumbnailsType;
    standard: ThumbnailsType;
  };
}

type StatisticsTrendingVideosType = {
  viewCount: string;
};

export type VideosType = {
  id: string;
  snippet: SnippetVideosType;
  statistics: StatisticsTrendingVideosType;
};

export type UsingVideosType = ArrayLike<SnippetVideosType>;
