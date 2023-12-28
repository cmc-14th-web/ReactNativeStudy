const deleteAllMarkers = (markersArr: any) => {
  for (let i=0; i<markersArr.length; i++) {
    markersArr[i].setMap(null);
  }
  markersArr.length = 0;
};

export default deleteAllMarkers;
