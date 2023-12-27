import star from "../assets/star.svg";

type StarIconProps = {
  size?: string;
};

export default function StarIcon({ size = "16px" }: StarIconProps) {
  return (
    <div style={{ ...iconStyle, width: size, height: size }}>
      <img src={star} alt={"star"} width="100%" height="100%" />
    </div>
  );
}

const iconStyle: React.CSSProperties = {
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#5061FF",
  borderRadius: "100%",
};
