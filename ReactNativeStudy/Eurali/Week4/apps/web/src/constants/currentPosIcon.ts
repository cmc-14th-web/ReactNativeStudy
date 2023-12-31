const { kakao } = window;

const currentPosIcon = new kakao.maps.MarkerImage(
  '/currentPosIconImage.png',
  new kakao.maps.Size(30, 30), new kakao.maps.Point(13, 34)
);

export default currentPosIcon;