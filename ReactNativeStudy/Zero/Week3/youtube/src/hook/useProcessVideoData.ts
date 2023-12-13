import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';

dayjs.extend(relativeTime);
dayjs.locale('ko');

const compactNumberFormatter = new Intl.NumberFormat('ko', {
  notation: 'compact',
});

export const useGetFormattedViewCount = (viewCount: number) => {
  return compactNumberFormatter.format(viewCount) + '회';
};

export const getFormattedDate = (date: string) => {
  return dayjs(date).fromNow();
};
