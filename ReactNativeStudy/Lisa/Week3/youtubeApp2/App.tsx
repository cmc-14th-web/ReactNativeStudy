import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Navigation from 'navigators/Navigation';

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navigation />
      </QueryClientProvider>
    </>
  );
};

export default App;

/* 스토리북 실행 원할 시 주석 제거
export {default} from './.storybook';
*/
