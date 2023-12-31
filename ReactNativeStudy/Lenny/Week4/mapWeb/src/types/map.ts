export interface ClickMapProps {
  favoriteMarkerLists: naver.maps.Marker[];
  map: naver.maps.Map;
  marker: naver.maps.Marker | undefined;
  setCurrentLatLng: React.Dispatch<React.SetStateAction<naver.maps.LatLng>>;
  setIsMarkerFixed: React.Dispatch<React.SetStateAction<boolean>>;
  setShowFavoriteState: React.Dispatch<React.SetStateAction<boolean>>;
  setAddFavoriteState: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface DragMapProps {
  map: naver.maps.Map;
  setIsMarkerFixed: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SetMapCenterProps {
  map: naver.maps.Map | undefined;
  marker: naver.maps.Marker | undefined;
  center: naver.maps.LatLng;
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

export interface InitMarkerProps extends InitMapReturnProps {
  setMarker: React.Dispatch<React.SetStateAction<naver.maps.Marker | undefined>>;
}

export interface InitMapProps {
  latitude: number;
  longitude: number;
  setMap: React.Dispatch<React.SetStateAction<naver.maps.Map | undefined>>;
  setCenter: React.Dispatch<React.SetStateAction<naver.maps.LatLng>>;
}

export interface InitMapReturnProps {
  map: naver.maps.Map;
  center: naver.maps.LatLng;
}

export interface InitialRequestProps {
  response: CoordinationProps;
  setMap: React.Dispatch<React.SetStateAction<naver.maps.Map | undefined>>;
  setCenter: React.Dispatch<React.SetStateAction<naver.maps.LatLng>>;
  setMarker: React.Dispatch<React.SetStateAction<naver.maps.Marker | undefined>>;
  setTopInset: React.Dispatch<React.SetStateAction<number>>;
}
