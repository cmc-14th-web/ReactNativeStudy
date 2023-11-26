import {RecoilRoot} from 'recoil';
import {ThemeProvider} from 'styled-components';
import {theme} from './src/styles';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <div />
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
