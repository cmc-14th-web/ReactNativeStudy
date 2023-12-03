import styled from 'styled-components/native';

export const CompleteText = styled.Text<{color: string}>`
  color: ${props => props.color};
  font-size: 16;
`;
