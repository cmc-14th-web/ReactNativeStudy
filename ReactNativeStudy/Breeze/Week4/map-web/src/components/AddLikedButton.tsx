import { useAllLikedPlaces } from "@/atoms/allLikedPlaces";
import { useLikedPlaces } from "@/atoms/likedPlace";
import colorStar from "../../public/colorStar.svg";
import Image from "next/image";

interface AddLikedButtonProps {
  selected: boolean;
  setSelected: (value: boolean) => void;
}

function AddLikedButton({ selected, setSelected }: AddLikedButtonProps) {
  const { likedPlace } = useLikedPlaces();
  const { allLikedPlaces, setAllLikedPlaces } = useAllLikedPlaces();

  const handleAddLikedButtonClick = () => {
    setAllLikedPlaces([...allLikedPlaces, likedPlace]);
    // map click 상태 false로
    setSelected(false);
  };
  return (
    <button
      //className="bg-blue-500 text-blue-50 py-2 px-4 rounded"
      onClick={handleAddLikedButtonClick}
    >
      <Image src={colorStar} alt="" />
    </button>
  );
}
export default AddLikedButton;
