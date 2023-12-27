import React from "react";
import StarIcon from "./StarIcon";

export default function FavoriteButton() {
  const handleClick = () => {
    const message = { type: "navigateBookmarkPage" };
    window.sendMessageToReactNative(message);
  };

  return (
    <button style={buttonStyle} onClick={handleClick}>
      <StarIcon />
      즐겨찾기
    </button>
  );
}

const buttonStyle: React.CSSProperties = {
  position: "absolute",
  top: "10px",
  left: "10px",
  gap: "5px",
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
  outline: "none",
};
