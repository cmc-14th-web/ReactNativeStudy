import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../styles/@hooks/useTheme";
import Colors, { MainColorCodeKeys } from "../styles/colors";
import Container from "../components/Container";

export default function SettingScreen() {
  const { updatePrimaryColor } = useTheme();

  return (
    <Container>
      <Text style={{ fontSize: 18 }}>색상을 선택해주세요.</Text>
      <View style={{ flexDirection: "row", gap: 28, justifyContent: "center", padding: 16 }}>
        {Object.entries(Colors.main).map(([colorCode, color]) => (
          <TouchableOpacity
            key={colorCode}
            onPress={() => updatePrimaryColor(colorCode as MainColorCodeKeys)}
            style={{ borderRadius: 100, width: 30, height: 30, backgroundColor: color }}
          />
        ))}
      </View>
    </Container>
  );
}
