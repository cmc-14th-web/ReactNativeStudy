export const markerMakeHandler = (
  imgSrc: string,
  width: number,
  height: number
) => {
  const imageSize = new window.kakao.maps.Size(width, height);

  const markerImage = new window.kakao.maps.MarkerImage(imgSrc, imageSize);
  return markerImage;
};
