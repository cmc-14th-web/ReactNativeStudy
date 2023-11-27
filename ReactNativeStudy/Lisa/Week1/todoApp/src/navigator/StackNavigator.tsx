import {createStackNavigator} from '@react-navigation/stack';
import {theme} from 'styles';
import {Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import BottomTabNavigator from './BottomTabNavigator';

import AddTodo from 'screens/AddTodo';
import styled from 'styled-components';
import ArrowBackIcon from 'assets/icons/ArrowBackIcon';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerStyle: {
          backgroundColor: theme.palette.gray,
          height: 48,
        },
        headerTitleAlign: 'center',
        headerTintColor: theme.palette.orange,
        headerTitleStyle: {
          fontFamily: 'Pretendard',
          fontSize: 18,
          color: theme.palette.orange,
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
              <ArrowBackIcon />
            </StyledIconButton>
          ),
          headerRight: () => (
            <StyledTextButton>
              <StyledText>완료</StyledText>
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

const StyledText = styled(Text)`
  ${theme.typo.title};
  color: ${theme.palette.orange};
`;
