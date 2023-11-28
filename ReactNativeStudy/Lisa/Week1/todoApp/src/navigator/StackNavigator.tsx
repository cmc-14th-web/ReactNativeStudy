import {createStackNavigator} from '@react-navigation/stack';
import {KeyOfPalette, theme} from 'styles';
import {Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import BottomTabNavigator from './BottomTabNavigator';

import AddTodo from 'screens/AddTodo';
import styled from 'styled-components';
import ArrowBackIcon from 'assets/icons/ArrowBackIcon';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {colorState} from 'libs/store/color';
import {modalState} from 'libs/store/modal';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const navigation = useNavigation();
  const colorData = useRecoilValue(colorState);
  const setModalData = useSetRecoilState(modalState);

  const handlePressCompleteButton = () => {
    setModalData(prevState => ({
      ...prevState,
      isAddTodoVisible: true,
    }));
  };

  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerStyle: {
          backgroundColor: theme.palette.gray,
          height: 48,
        },
        headerTitleAlign: 'center',
        headerTintColor: theme.palette[colorData.color],
        headerTitleStyle: {
          fontFamily: 'Pretendard',
          fontSize: 18,
          color: theme.palette[colorData.color],
          lineHeight: 25.2,
        },
      })}>
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
          headerLeft: () => (
            <StyledIconButton onPress={() => navigation.navigate('Home')}>
              <ArrowBackIcon fill={colorData.color} />
            </StyledIconButton>
          ),
          headerRight: () => (
            <StyledTextButton onPress={handlePressCompleteButton}>
              <StyledText textColor={colorData.color}>완료</StyledText>
            </StyledTextButton>
          ),
          headerRightContainerStyle: {
            marginTop: 'auto',
            marginBottom: 'auto',
            padding: 0,
            margin: 0,
          },
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
