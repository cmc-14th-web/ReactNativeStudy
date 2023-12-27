import { useMemo } from "react";
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

type StarButtonProps = {
  location: Location | undefined;
};

export default function StarButton({ location }: StarButtonProps) {
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

  const disabled = useMemo(() => !location, [location]);

  return (
    <button disabled={disabled} onClick={handleClick} style={buttonStyle(disabled)}>
      <StarIcon size={"20px"} />
    </button>
  );
}

const buttonStyle = (disabled: boolean): React.CSSProperties => ({
  padding: "4px",
  position: "absolute",
  top: "10px",
  right: "-365px",
  borderRadius: "50%",
  border: "none",
  outline: "none",
  fontSize: "1em",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  backgroundColor: disabled ? "#e0e0e0" : "#5061FF",
  color: disabled ? "#8B8B8B" : "white",
  cursor: disabled ? "default" : "pointer",
  opacity: disabled ? 0.5 : 1,
});
