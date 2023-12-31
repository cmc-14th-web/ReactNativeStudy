const { kakao } = window;

const clickedPosIcon = new kakao.maps.MarkerImage(
  '/clickedPosIconImage.png',
  new kakao.maps.Size(40, 40), new kakao.maps.Point(13, 34)
);

export default clickedPosIcon;