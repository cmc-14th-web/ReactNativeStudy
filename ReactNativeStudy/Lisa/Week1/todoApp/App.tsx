import {RecoilRoot} from 'recoil';
import {ThemeProvider} from 'styled-components';
import {theme} from 'styles';

import Navigator from 'navigator/Navigator';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <Navigator />
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
