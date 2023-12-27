import { RemoveFavoriteProps } from "../types/favorite";

const removeFavorite = ({ favoriteMarkerInformationLists, favoriteMarkerLists }: RemoveFavoriteProps) => {
  favoriteMarkerInformationLists.pop();
  favoriteMarkerLists.pop();
  window.ReactNativeWebView.postMessage(JSON.stringify({ type: "removeData", favoriteMarkerInformationLists: favoriteMarkerInformationLists }));
};

export default removeFavorite;
