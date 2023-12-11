type thumbnailsType = {
  url: string;
  width: number;
  height: number;
};

export type snippetTrendingVideosType = {
  viewCount: string;
  channelTitle: string;
  title: string;
  thumbnails: {
    default: thumbnailsType;
    high: thumbnailsType;
    maxres: thumbnailsType;
    medium: thumbnailsType;
    standard: thumbnailsType;
  };
  publishedAt: string;
};

type statisticsTrendingVideosType = {
  viewCount: string;
};

export type trendingVideosType = {
  snippet: snippetTrendingVideosType;
  statistics: statisticsTrendingVideosType;
};
