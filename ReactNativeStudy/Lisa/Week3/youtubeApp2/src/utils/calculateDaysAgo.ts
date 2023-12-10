export const calculateDaysAgo = (dateString: string) => {
  const currentTime = new Date().getTime();
  const givenTime = new Date(dateString).getTime();

  const timeDiff = currentTime - givenTime;
  const daysAgo = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  return daysAgo ? `${daysAgo}일 전` : '오늘';
};
