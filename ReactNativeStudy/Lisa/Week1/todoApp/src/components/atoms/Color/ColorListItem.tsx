import {useSetRecoilState} from 'recoil';
import {KeyOfPalette} from 'styles';

import {colorState} from 'libs/store/color';
import {colorList} from 'utils/colorList';
import Color from '.';

const ColorListItem = () => {
  const setColorData = useSetRecoilState(colorState);

  return colorList.map((colorData: KeyOfPalette, index: number) => (
    <Color
      key={index}
      color={colorData}
      onClick={() =>
        setColorData(prevData => ({...prevData, color: colorData}))
      }
    />
  ));
};

export default ColorListItem;
