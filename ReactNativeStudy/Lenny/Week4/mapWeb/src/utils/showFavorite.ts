interface ShowFavoriteProps {
  activatedFavorite: boolean;
  setActivatedFavorite: React.Dispatch<React.SetStateAction<boolean>>;
  favoriteMarkers: naver.maps.Marker[];
}

export const showFavorite = ({ activatedFavorite, setActivatedFavorite, favoriteMarkers }: ShowFavoriteProps) => {
  setActivatedFavorite(!activatedFavorite);
  if (!activatedFavorite) {
    favoriteMarkers.map((favoriteMarker) => favoriteMarker.setOptions({ position: favoriteMarker.getPosition(), visible: true }));
  }

  if (activatedFavorite) {
    favoriteMarkers.map((favoriteMarker) => favoriteMarker.setOptions({ position: favoriteMarker.getPosition(), visible: false }));
  }
};
