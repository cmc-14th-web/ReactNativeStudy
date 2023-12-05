import { Defs, LinearGradient, Path, Stop, Svg } from "react-native-svg";
import { ICONS, IconName } from "../../constants/icons";
import { COLOR, Color, GRADIENT } from "../../constants/color";

interface IconProps {
    name: IconName;
    size: number;
    fill: Color;
}

const isGradient = (color: Color) => {
    return Object.values(GRADIENT).includes(color);
};

function GradientFill() {
    return (
        <Defs>
            <LinearGradient id='gradient'>
                <Stop offset="0%" stopColor={COLOR.Pink} />
                <Stop offset="100%" stopColor={COLOR.Purple} />
            </LinearGradient>
        </Defs>
    );
}

function renderingGradientFill(color: Color) {
    if (isGradient(color)) {
        return <GradientFill />;
    }
    return null;
}

export function Icon({ name, size, fill, ...props }: IconProps) {
    return (
        <Svg width={size} height={size} viewBox={`0 0 ${size + 1} ${size + 1}`} fill="none" {...props}>
            {renderingGradientFill(fill)}
            {ICONS[name].map((path, index) => (
                <Path key={index} d={path} fill={isGradient(fill) ? 'url(#gradient)' : fill} />
            ))}
        </Svg>
    );
}