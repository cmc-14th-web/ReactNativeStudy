import React, {useEffect} from 'react';
import Navigator from './src/navigators/Navigator';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useStore} from './src/store/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function App(): JSX.Element {
  const {setColor, setTodos} = useStore();

  useEffect(() => {
    const checkColorExist = async () => {
      try {
        const isColorExist = await AsyncStorage.getItem('color');
        const isTodosExist = await AsyncStorage.getItem('todos');
        if (isColorExist) {
          setColor(isColorExist);
        }
        if (isTodosExist) {
          const parsingTodo = JSON.parse(isTodosExist);
          setTodos([...parsingTodo]);
        }
      } catch (err) {
        console.log(err);
      }
    };

    checkColorExist();
  }, [setColor, setTodos]);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
