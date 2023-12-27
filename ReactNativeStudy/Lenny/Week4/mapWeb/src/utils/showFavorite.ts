import { ShowFavoriteProps } from "../types/favorite";

export const showFavorite = ({ showFavoriteState, setShowFavoriteState, favoriteMarkerLists }: ShowFavoriteProps) => {
  setShowFavoriteState(!showFavoriteState);
  if (!showFavoriteState) {
    favoriteMarkerLists.map((favoriteMarker) => favoriteMarker.setOptions({ position: favoriteMarker.getPosition(), visible: true }));
  }

  if (showFavoriteState) {
    favoriteMarkerLists.map((favoriteMarker) => favoriteMarker.setOptions({ position: favoriteMarker.getPosition(), visible: false }));
  }
};
