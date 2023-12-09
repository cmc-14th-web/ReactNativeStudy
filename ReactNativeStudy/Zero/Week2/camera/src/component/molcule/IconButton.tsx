import { Pressable } from "react-native";

import { Icon, IconProps } from "../atom/Icon";

interface IconButtonProps extends IconProps {
    onPress: () => void;
}

function IconButton({ name, size, fill, onPress }: IconButtonProps) {
    return (
        <Pressable onPress={onPress}>
            <Icon name={name} size={size} fill={fill} />
        </Pressable>
    )
}

export default IconButton;
