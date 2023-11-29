import React from "react";
import { TouchableOpacity } from "react-native";
import SvgIcon, { SvgLabelType } from "./SvgIcon";
import { useTheme } from "../styles/@hooks/useTheme";

export default function CreateTodoButton({ navigation }) {
  const { primaryColor } = useTheme();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("CreateTodoScreen")}
      style={{
        top: 5,
      }}
    >
      <SvgIcon label={SvgLabelType.Add} size={50} fill={primaryColor} />
    </TouchableOpacity>
  );
}
