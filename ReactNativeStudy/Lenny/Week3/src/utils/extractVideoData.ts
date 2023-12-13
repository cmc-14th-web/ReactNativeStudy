import {VideosType} from '../types/videos';
import {calculatePublishedTime} from './calculatePublishedTime';

const extractVideoData = (items: VideosType[]) =>
  items.map((item: VideosType) => {
    return {
      viewCount: item.statistics.viewCount, // 조회수
      channelTitle: item.snippet.channelTitle, // 채널 이름
      title: item.snippet.title, // 제목
      thumbnails: item.snippet.thumbnails, // 썸네일 사진 정보
      publishedAt: calculatePublishedTime(item.snippet.publishedAt), // 업로드 날짜
    };
  });

export default extractVideoData;
