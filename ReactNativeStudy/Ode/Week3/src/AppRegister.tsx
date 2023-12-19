import React, {ReactNode} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ReactQuerySetting from './libraries/react-query';
import RecoilSetting from './libraries/recoil';

type AppRegisterProps = {
  children: ReactNode;
};

export default function AppRegister({children}: AppRegisterProps) {
  return (
    <ReactQuerySetting>
      <RecoilSetting>
        <SafeAreaProvider>{children}</SafeAreaProvider>
      </RecoilSetting>
    </ReactQuerySetting>
  );
}
