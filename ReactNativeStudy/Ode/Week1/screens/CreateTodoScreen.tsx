import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import { Alert, Text, TextInput, TouchableOpacity } from "react-native";
import Colors from "../styles/colors";
import useTodoStorage from "../@hooks/useTodoStorage";
import { useTheme } from "../styles/@hooks/useTheme";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigators/RootNavigator";

type CreateTodoScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "CreateTodoScreen"
>;

type CreateTodoScreenProps = {
  navigation: CreateTodoScreenNavigationProp;
  setOptions: () => any;
};

export default function CreateTodoScreen({ navigation }: CreateTodoScreenProps) {
  const { primaryColor } = useTheme();

  const { addTodo } = useTodoStorage();

  const [text, setText] = useState<string>("");
  const onChangeText = (updatedText: string) => setText(updatedText);

  const onSubmitText = async () => {
    if (text.length > 0) {
      await addTodo(text);
      setText("");

      Alert.alert("할일이 추가되었습니다.");
    }
    navigation.navigate("MainTab", { screen: "HomeScreen" });
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => onSubmitText()}>
          <Text style={{ fontSize: 18, fontWeight: "700", color: primaryColor }}>완료</Text>
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <Container>
      <TextInput
        value={text}
        placeholder={"여기에 입력해주세요"}
        onChangeText={onChangeText}
        returnKeyType="done"
        style={todoStyles}
      />
    </Container>
  );
}

export const todoStyles = {
  backgroundColor: Colors.white,
  padding: 20,
  borderRadius: 20,
  height: 60,
};
