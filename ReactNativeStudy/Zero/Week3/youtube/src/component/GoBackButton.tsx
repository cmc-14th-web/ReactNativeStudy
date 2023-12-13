import { useNavigation } from "@react-navigation/native";
import IconButton from "./IconButton";
import { IconProps } from "./Icon";

function GoBackButton({ width, height, fill }: Partial<IconProps>) {
    const navigation = useNavigation();
    const handleGoBack = () => navigation.goBack();

    return (
        <IconButton id="ArrowBack" width={width} height={height} fill={fill} handlePress={handleGoBack} />
    );
}

export default GoBackButton;
