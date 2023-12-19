import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Navigation} from './navigations';
import {RecoilRoot} from 'recoil';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    setTimeout(async () => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Navigation />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
