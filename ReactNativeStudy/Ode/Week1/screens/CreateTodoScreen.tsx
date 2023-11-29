import React, { useState } from "react";
import Container from "../components/Container";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import Colors from "../styles/colors";
import useTodoStorage from "../@hooks/useTodoStorage";
import { useTheme } from "../styles/@hooks/useTheme";
import SvgIcon, { SvgLabelType } from "../components/SvgIcon";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigators/RootNavigator";

type CreateTodoScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "CreateTodoScreen"
>;

type CreateTodoScreenProps = {
  navigation: CreateTodoScreenNavigationProp;
};

export default function CreateTodoScreen({ navigation }: CreateTodoScreenProps) {
  const { primaryColor } = useTheme();

  const { addTodo } = useTodoStorage();

  const [text, setText] = useState<string>("");
  const onChangeText = (updatedText: string) => setText(updatedText);

  const onSubmitText = async () => {
    await addTodo(text);
    setText("");

    Alert.alert("할일이 추가되었습니다.");
    navigation.navigate("MainTab", { screen: "HomeScreen" });
  };

  return (
    <View style={{ marginTop: 50, backgroundColor: Colors.backgroundColor }}>
      <View
        style={{
          height: 50,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <SvgIcon label={SvgLabelType.ArrowBack} />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: "700", color: primaryColor }}>
          할일을 추가해주세요!
        </Text>
        <TouchableOpacity onPress={() => onSubmitText()}>
          <Text style={{ fontSize: 18, fontWeight: "700", color: primaryColor }}>완료</Text>
        </TouchableOpacity>
      </View>
      <Container>
        <TextInput
          value={text}
          placeholder={"여기에 입력해주세요"}
          onChangeText={onChangeText}
          returnKeyType="done"
          style={todoStyles}
        />
      </Container>
    </View>
  );
}

export const todoStyles = {
  backgroundColor: Colors.white,
  padding: 20,
  borderRadius: 20,
  height: 60,
};
