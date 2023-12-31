import React, {ReactNode} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RecoilSetting from './libraries/recoil';

type AppRegisterProps = {
  children: ReactNode;
};

export default function AppRegister({children}: AppRegisterProps) {
  return (
    <RecoilSetting>
      <SafeAreaProvider>{children}</SafeAreaProvider>
    </RecoilSetting>
  );
}
