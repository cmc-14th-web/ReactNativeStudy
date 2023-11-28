import React, { ReactNode } from "react";
import { View } from "react-native";

type ContainerProps = { children: ReactNode };

export default function Container({ children }: ContainerProps) {
  return <View style={{ gap: 20, padding: 30 }}>{children}</View>;
}
