import styled from 'styled-components';
import {Text} from 'react-native';
import {CustomModalVariant} from '.';

const ModalTopText = ({variant}: {variant: CustomModalVariant}) => {
  return variant === 'addTodo' ? (
    <StyledText>할일이 추가되었습니다!</StyledText>
  ) : (
    <StyledText>정말 삭제하시겠습니까?</StyledText>
  );
};

export default ModalTopText;

const StyledText = styled(Text)`
  color: #fafafa;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 300;
`;
