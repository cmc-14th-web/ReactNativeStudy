export type videoInfo = {
  id: string;
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
  statistics: {
    viewCount: string;
  };
};
