import {createStackNavigator} from '@react-navigation/stack';
import {KeyOfPalette, theme} from 'styles';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import BottomTabNavigator from './BottomTabNavigator';
import styled from 'styled-components/native';
import {useRecoilValue} from 'recoil';

import AddTodo from 'screens/AddTodo';
import ArrowBackIcon from 'assets/icons/ArrowBackIcon';
import {colorState} from 'libs/store/color';
import useSetModalData from 'libs/hooks/useSetModalData';
import useNavigator from 'libs/hooks/useNavigator';

export type RootStackParamList = {
  Home: undefined;
  AddTodo: undefined;
  BottomTabNavigator: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  const {stackNavigation} = useNavigator();
  const colorData = useRecoilValue(colorState);
  const {setAddTodoModalVisible} = useSetModalData();

  const handlePressCompleteButton = () => {
    setAddTodoModalVisible(true);
  };

  const screenOptions = () => ({
    headerStyle: {
      backgroundColor: theme.palette.gray,
      height: 48,
    },
    headerTitleAlign: 'center' as const,
    headerTintColor: theme.palette[colorData.color],
    headerTitleStyle: {
      fontFamily: 'Pretendard',
      fontSize: 18,
      color: theme.palette[colorData.color],
      lineHeight: 25.2,
    },
  });

  const headerLeftChildren = () => (
    <StyledIconButton onPress={() => stackNavigation.navigate('Home')}>
      <ArrowBackIcon fill={colorData.color} />
    </StyledIconButton>
  );

  const headerRightChildren = () => (
    <StyledTextButton onPress={handlePressCompleteButton}>
      <StyledText textColor={colorData.color}>완료</StyledText>
    </StyledTextButton>
  );

  const headerRightContainerStyle = {
    marginTop: 'auto' as const,
    marginBottom: 'auto' as const,
    padding: 0,
    margin: 0,
  };

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddTodo"
        component={AddTodo}
        options={{
          title: '할일을 추가해주세요!',
          headerLeft: headerLeftChildren,
          headerRight: headerRightChildren,
          headerRightContainerStyle: headerRightContainerStyle,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const StyledIconButton = styled(TouchableOpacity)`
  margin-left: 20px;
`;

const StyledTextButton = styled(TouchableOpacity)`
  margin-right: 20px;
`;

const StyledText = styled(Text)<{textColor: KeyOfPalette}>`
  ${theme.typo.title};
  color: ${({textColor}) => theme.palette[textColor]};
`;
