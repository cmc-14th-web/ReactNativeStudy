export interface ClickMapProps {
  favoriteMarkerLists: naver.maps.Marker[];
  map: naver.maps.Map;
  marker: naver.maps.Marker | undefined;
  setCurrentLatLng: React.Dispatch<React.SetStateAction<naver.maps.LatLng>>;
  setIsMarkerFixed: React.Dispatch<React.SetStateAction<boolean>>;
  setShowFavoriteState: React.Dispatch<React.SetStateAction<boolean>>;
  setAddFavoriteState: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SetMapCenterProps {
  map: naver.maps.Map | undefined;
  marker: naver.maps.Marker | undefined;
  centerLocation: naver.maps.LatLng;
  setIsMarkerFixed: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface CoordinationProps {
  coords: {
    latitude: number;
    longitude: number;
  };
  topInset: number;
  type: string;
}
