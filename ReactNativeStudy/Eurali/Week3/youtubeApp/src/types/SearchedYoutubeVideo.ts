export interface SearchedYoutubeVideo {
  kind: string;
  etag: 'etag';
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    publishedAt: string; // 사용
    channelId: string;
    title: string; // 사용
    description: string;
    thumbnails: {
      medium: {
        url: string; // 사용
        width: number;
        height: number;
      };
    };
    channelTitle: string; // 사용
    localized: {
      title: string;
      description: string;
    };
    defaultAudioLanguage: string;
  };
}
