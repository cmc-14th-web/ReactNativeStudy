import { IlocationState } from "@/types/location";
import { atom, useRecoilState } from "recoil";

export const allLikedPlacesState = atom<IlocationState[]>({
  key: "allLiked",
  default: [],
});

export const useAllLikedPlaces = () => {
  const [allLikedPlaces, setAllLikedPlaces] =
    useRecoilState(allLikedPlacesState);

  const setNewAllLikedPlace = (newLikedPlaces: IlocationState[]) => {
    setAllLikedPlaces(newLikedPlaces);
  };

  return { allLikedPlaces, setAllLikedPlaces: setNewAllLikedPlace };
};
