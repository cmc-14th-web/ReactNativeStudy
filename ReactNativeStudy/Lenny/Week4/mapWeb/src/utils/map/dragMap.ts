import { DragMapProps } from "../../types/map";

const dragMap = ({ map, setIsMarkerFixed }: DragMapProps) => {
  naver.maps.Event.addListener(map, "dragstart", () => {
    setIsMarkerFixed(false);
  });
};

export default dragMap;
