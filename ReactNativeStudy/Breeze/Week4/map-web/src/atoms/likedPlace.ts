import { IlocationState } from "@/types/location";
import { atom, useRecoilState } from "recoil";

export const likedPlaceState = atom<IlocationState>({
  key: "liked",
  default: { latitude: 0, longitude: 0 },
});

export const useLikedPlaces = () => {
  const [likedPlaces, setLikedPlaces] = useRecoilState(likedPlaceState);

  const setNewLikedPlace = (newLikedPlaces: IlocationState) => {
    setLikedPlaces(newLikedPlaces);
  };

  return { likedPlace: likedPlaces, setLikedPlace: setNewLikedPlace };
};
