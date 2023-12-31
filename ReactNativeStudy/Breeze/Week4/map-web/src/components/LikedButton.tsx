import Image from "next/image";
import colorStar from "../../public/colorStar.svg";
import activeStar from "../../public/activeStar.svg";

interface likedButtonProps {
  selected: boolean;
  setSelected: (value: boolean) => void;
}

function LikedButton({ selected, setSelected }: likedButtonProps) {
  const handleLikedButtonClick = () => {
    setSelected(!selected);
  };
  return (
    <button
      className={`${
        selected ? "bg-blue-600 text-blue-50" : "bg-white text-black"
      }  py-1 px-2 flex items-center text-sm rounded-[20px] border border-solid border-black`}
      onClick={handleLikedButtonClick}
    >
      {selected ? (
        <Image src={activeStar} alt="" className="w-4 h-4 mr-1" />
      ) : (
        <Image src={colorStar} alt="" className="w-4 h-4 mr-1" />
      )}
      즐겨찾기
    </button>
  );
}
export default LikedButton;
