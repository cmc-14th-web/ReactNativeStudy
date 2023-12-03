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

  return {
    setBottomTabFloatingButtonVisible,
  };
};

export default useSetButtonData;
