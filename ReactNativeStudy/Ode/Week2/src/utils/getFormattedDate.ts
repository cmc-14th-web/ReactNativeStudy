import moment from 'moment';

export default function getFormattedDate(date: string | undefined) {
  return moment(date ?? undefined).format('YYYY.MM.DD HH:mm');
}
