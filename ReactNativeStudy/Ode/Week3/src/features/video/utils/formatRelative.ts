import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko'; // 한국어 가져오기

dayjs.extend(relativeTime);
dayjs.locale('ko');

export default function formatRelativeTime(dateString: string): string {
  const date = dayjs(dateString);
  return date.fromNow();
}
