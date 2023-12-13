import { Pressable } from "react-native";
import { Icon, IconProps } from "./Icon";

interface IconButtonProps extends IconProps {
    handlePress: () => void;
}

function IconButton({ id, fill, width, height, handlePress }: IconButtonProps) {
    return (
        <Pressable onPress={handlePress}>
            <Icon id={id} fill={fill} width={width} height={height} />
        </Pressable>
    )
}

export default IconButton;
