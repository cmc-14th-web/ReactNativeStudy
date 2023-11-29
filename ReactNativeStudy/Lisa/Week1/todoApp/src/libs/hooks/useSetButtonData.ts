import {useEffect} from 'react';
import {useSetRecoilState} from 'recoil';

import {buttonState} from 'libs/store/button';

const useSetButtonData = () => {
  const setButtonState = useSetRecoilState(buttonState);

  const setBottomTabFloatingButtonVisible = (
    bottomTabFloatingButtonVisibleData: boolean,
  ) => {
    setButtonState(prevState => ({
      ...prevState,
      isBottomTabFloatingButtonVisible: bottomTabFloatingButtonVisibleData,
    }));
  };

  const useSetBottomTabFloatingButtonVisible = (
    bottomTabFloatingButtonVisibleData: boolean,
  ) => {
    useEffect(() => {
      setBottomTabFloatingButtonVisible(bottomTabFloatingButtonVisibleData);
    }, []);
  };

  return {
    setBottomTabFloatingButtonVisible,
    useSetBottomTabFloatingButtonVisible,
  };
};

export default useSetButtonData;
