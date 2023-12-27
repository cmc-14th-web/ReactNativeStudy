import star from "../assets/star.svg";

type StarIconProps = {
  size?: string;
};

export default function StarIcon({ size = "16px" }: StarIconProps) {
  return (
    <div style={iconStyle}>
      <img src={star} alt={"star"} width={size} height={size} />
    </div>
  );
}

const iconStyle: React.CSSProperties = {
  marginRight: "4px",
  justifyContent: "center",
  backgroundColor: "#5061FF",
  borderRadius: "100%",
};
