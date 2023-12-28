const { kakao } = window;

const initMarker = (mapItem: any, positionInfo: any, imageItem: any, markersArr: any[]) => {
  const marker = new kakao.maps.Marker({
    map: mapItem,
    position: positionInfo,
    image: imageItem
  })
  markersArr.push(marker);
};

export default initMarker;
