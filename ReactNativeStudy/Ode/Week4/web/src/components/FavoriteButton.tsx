import { getAddressFromLatLng } from "../utils/getAddressFromLatLng";
import { Location } from "./Map";
import StarIcon from "./StarIcon";
declare global {
  interface Window {
    sendMessageToReactNative: any;
    ReactNativeWebview: {
      postMessage: any;
    };
  }
}

type FavoriteButtonProps = {
  location: Location | undefined;
};

export default function FavoriteButton({ location }: FavoriteButtonProps) {
  const handleClick = () => {
    if (!location) {
      return;
    }

    getAddressFromLatLng(location, (error, results) => {
      if (error) {
        console.error(error);
      }

      if (results) {
        const { place_id, formatted_address } = results[0];

        const message = JSON.stringify({
          type: "favoriteLocation",
          data: {
            id: place_id,
            address: formatted_address,
            ...location,
          },
        });

        window.sendMessageToReactNative(message);
      }
    });
  };

  return (
    <button disabled={!location} onClick={handleClick} style={buttonStyle}>
      <StarIcon />
      즐겨찾기
    </button>
  );
}

const buttonStyle: React.CSSProperties = {
  position: "absolute",
  top: "10px",
  left: "10px",
  display: "flex",
  width: "max-content",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "white",
  color: "#000",
  padding: "4px 8px",
  borderRadius: "20px",
  border: "1px solid #000",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  cursor: "pointer",
  fontSize: "14px",
  userSelect: "none",
  outline: "none",
};
