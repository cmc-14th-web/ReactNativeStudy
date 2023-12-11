import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
} from 'date-fns';

export const calculatePublishedTime = (publishedAt: string) => {
  // 며칠 전인지 확인
  let difference = differenceInDays(new Date(), new Date(publishedAt));
  //  같은 날 올라왔다면
  if (!difference) {
    // 몇 시간 전인지 확인
    difference = differenceInHours(new Date(), new Date(publishedAt));
    // 같은 시간에 올라왔다면
    if (!difference) {
      // 몇 분 전인지 확인
      difference = differenceInMinutes(new Date(), new Date(publishedAt));
      //   같은 분에 올라왔다면
      if (!difference) {
        // '몇 초 전' 반환
        return '몇 초 전';
      }
      return `${difference}분 전`;
    }
    return `${difference}시간 전`;
  }
  return `${difference}일 전`;
};
