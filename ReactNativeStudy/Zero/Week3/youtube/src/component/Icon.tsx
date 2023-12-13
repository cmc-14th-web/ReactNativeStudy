import { Svg, Path } from "react-native-svg";
import { ICON, IconType } from "../constant/icon";

export interface IconProps {
    id: IconType;
    fill?: string;
    width?: number;
    height?: number;
}

export function Icon({ id, fill, width, height }: IconProps) {
    return (
        <Svg width={width} height={height} viewBox="0 0 24 24">
            <Path d={ICON[id]} fill={fill} />
        </Svg>
    )
}