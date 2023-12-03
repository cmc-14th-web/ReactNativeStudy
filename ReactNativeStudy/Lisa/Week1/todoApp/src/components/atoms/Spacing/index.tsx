import styled from 'styled-components';
import {View} from 'react-native';

const Spacing = styled(View)<{height: number}>`
  height: ${({height}) => (height ? `${height}px` : '18px')};
`;

export default Spacing;
