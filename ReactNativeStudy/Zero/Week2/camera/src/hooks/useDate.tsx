import dayjs from 'dayjs';

export function useDate() {
    const getDateFormat = (date: number) => {
        dayjs.locale('ko');
        return dayjs.unix(date).format('YYYY.MM.DD HH:mm');
    }

    return {
        getDateFormat,
    }
}