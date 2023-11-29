import React from 'react';

import {RecoilRoot} from 'recoil';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <>
      <RecoilRoot>
        <Navigation />
      </RecoilRoot>
    </>
  );
}

// const styles = StyleSheet.create({});

export default App;
