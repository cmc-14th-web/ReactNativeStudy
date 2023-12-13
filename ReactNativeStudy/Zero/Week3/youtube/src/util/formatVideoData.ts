import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import {VideoInfo} from '../type/videoInfo';

dayjs.extend(relativeTime);
dayjs.locale('ko');

const compactNumberFormatter = new Intl.NumberFormat('ko', {
  notation: 'compact',
});

export const getFormattedViewCount = (viewCount: number) => {
  return compactNumberFormatter.format(viewCount) + '회';
};

export const getFormattedDate = (date: string) => {
  return dayjs(date).fromNow();
};

const getFormattedVideoData = (videoData: VideoInfo) => {
  const viewCountFromData = videoData.statistics
    ? videoData.statistics.viewCount
    : 0;

  return {
    id: typeof videoData.id === 'object' ? videoData.id.videoId : videoData.id,
    title: videoData.snippet.title,
    channelTitle: videoData.snippet.channelTitle,
    publishedAt: getFormattedDate(videoData.snippet.publishedAt),
    thumbnail: videoData.snippet.thumbnails.medium.url,
    viewCount: getFormattedViewCount(viewCountFromData),
  };
};

export const getFormattedVideoDatas = (videoDatas: VideoInfo[]) => {
  return videoDatas.map(videoData => getFormattedVideoData(videoData));
};
