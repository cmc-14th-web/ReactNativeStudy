import React from 'react';
import {RecoilRoot} from 'recoil';
import Navigation from './src/pages/navigation';

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <Navigation />
    </RecoilRoot>
  );
}

export default App;
