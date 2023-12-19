import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React, {ReactNode} from 'react';

type ReactQuerySettingProps = {
  children: ReactNode;
};

export default function ReactQuerySetting({children}: ReactQuerySettingProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

const queryClient = new QueryClient();
