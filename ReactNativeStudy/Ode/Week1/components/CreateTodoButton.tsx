import React from "react";
import { TouchableOpacity } from "react-native";
import SvgIcon, { SvgLabelType } from "./SvgIcon";
import RoutePath from "../navigators/routePath";

export default function CreateTodoButton({ navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(RoutePath.CreateTodoScreen)}
      style={{
        flex: 1,
        top: 5,
      }}
    >
      <SvgIcon label={SvgLabelType.Add} height={50} />
    </TouchableOpacity>
  );
}
