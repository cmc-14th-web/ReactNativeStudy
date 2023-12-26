import { Location } from "./map/Map";

declare global {
  interface Window {
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
    console.log(location);
    if (location) {
      const message = JSON.stringify({
        type: "favoriteLocation",
        data: location,
      });
      // Post the message to the React Native WebView
      if (window.ReactNativeWebview) {
        console.log("hi");
        window.ReactNativeWebview.postMessage(message);
      } else {
        console.error("The React Native WebView environment is not available.");
      }
    }
  };

  return (
    <button onClick={handleClick} style={buttonStyle} id="favoriteButton">
      <div style={iconStyle}>
        {/* You can use an img tag or an svg tag here depending on what your icon is */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none">
          <path
            d="M4.88294 12.6153L5.7096 9.0733L2.96094 6.69196L6.5816 6.37863L7.9996 3.03796L9.4176 6.37796L13.0376 6.6913L10.2896 9.07263L11.1163 12.6146L7.9996 10.7346L4.88294 12.6153Z"
            fill="white"
          />
        </svg>
      </div>
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

const iconStyle: React.CSSProperties = {
  marginRight: "4px",
  justifyContent: "center",
  backgroundColor: "#5061FF",
  borderRadius: "100%",
  width: "16px",
  height: "16px",
};
