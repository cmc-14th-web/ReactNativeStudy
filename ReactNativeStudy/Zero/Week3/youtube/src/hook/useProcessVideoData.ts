const compactNumberFormatter = new Intl.NumberFormat('ko', {
  notation: 'compact',
});

export const useGetFormattedViewCount = (viewCount: number) => {
  return compactNumberFormatter.format(viewCount) + '회';
};
