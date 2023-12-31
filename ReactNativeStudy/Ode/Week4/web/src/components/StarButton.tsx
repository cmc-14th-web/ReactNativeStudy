import { useMemo } from "react";
import { getAddressFromLatLng } from "../utils/getAddressFromLatLng";
import StarIcon from "./StarIcon";
import { Message } from "../types/message";
import { Address } from "../types/address";
declare global {
  interface Window {
    sendMessageToReactNative: any;
    ReactNativeWebview: {
      postMessage: any;
    };
  }
}

export default function StarButton() {
  const location = JSON.parse(localStorage.getItem("currentLocation") ?? "");
  // 저장방법 고민 좀 .. recoil 쓰자 ~! ?
  const handleClick = () => {
    if (!location) {
      return;
    }

    getAddressFromLatLng(
      JSON.parse(localStorage.getItem("currentLocation") ?? ""),
      (error, results) => {
        if (error) {
          console.error(error);
        }

        if (results) {
          const { place_id, formatted_address } = results[0];

          const message: Message<Address> = {
            type: "favoriteLocation",
            data: {
              id: place_id,
              address: formatted_address,
              ...location,
            },
          };

          window.sendMessageToReactNative(message);
        }
      }
    );
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
