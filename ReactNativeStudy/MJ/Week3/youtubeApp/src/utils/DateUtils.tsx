function daysAgo(targetDate: string) {
  const now = new Date();
  const target = new Date(targetDate);
  const timeDiff = now.getTime() - target.getTime();
  const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  return daysDiff;
}

export default {
  daysAgo,
};
