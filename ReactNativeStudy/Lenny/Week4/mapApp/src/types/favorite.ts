export interface FavoriteListItemProps {
  data: {
    index: number;
    item: FavoriteMarkerProps;
  };
}

export interface FavoriteMarkerProps {
  latitude: number;
  longitude: number;
  address: string;
}
