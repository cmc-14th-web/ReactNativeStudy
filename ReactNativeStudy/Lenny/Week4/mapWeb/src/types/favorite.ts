export interface FavoriteListItemProps {
  data: {
    index: number;
    item: favoriteMarkerInformationListsProps;
  };
}

export interface favoriteMarkerInformationListsProps {
  latitude: number;
  longitude: number;
  address: string;
}

export interface AddFavoriteProps {
  map: naver.maps.Map | undefined;
  currentLatLng: naver.maps.LatLng;
  favoriteMarkerLists: naver.maps.Marker[];
  setFavoriteMarkerLists: React.Dispatch<React.SetStateAction<naver.maps.Marker[]>>;
}

export interface RemoveFavoriteProps {
  favoriteMarkerLists: naver.maps.Marker[];
}

export interface ShowFavoriteProps {
  showFavoriteState: boolean;
  setShowFavoriteState: React.Dispatch<React.SetStateAction<boolean>>;
  favoriteMarkerLists: naver.maps.Marker[];
}
