type thumbnailsType = {
  url: string;
  width: number;
  height: number;
};

export type snippetVideosType = {
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

export type videosType = {
  snippet: snippetVideosType;
  statistics: statisticsTrendingVideosType;
};
