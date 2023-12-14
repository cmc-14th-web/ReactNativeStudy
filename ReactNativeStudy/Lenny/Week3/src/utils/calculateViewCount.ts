const ONE_HUNDRED_MILLION: number = 100000000;
const MILLION: number = 10000;
const THOUSAND: number = 1000;

const calculateViewCount = (viewCount: string) => {
  const stringToNumber = +viewCount;

  // 1억보다 크거나 같으면
  if (stringToNumber >= ONE_HUNDRED_MILLION) {
    return `${Math.floor(stringToNumber / ONE_HUNDRED_MILLION)}억회`;
  }
  // 1만보다 크거나 같으면
  if (stringToNumber >= MILLION) {
    return `${Math.floor(stringToNumber / MILLION)}만회`;
  }
  // 1천보다 크거나 같으면
  if (stringToNumber >= THOUSAND) {
    return `${Math.floor(stringToNumber / THOUSAND)}천회`;
  }

  return `${viewCount}회`;
};

export default calculateViewCount;
