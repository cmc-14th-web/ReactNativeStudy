import {css} from 'styled-components';

export const typo = {
  title: css`
    font-family: Pretendard;
    font-size: 18px;
    font-weight: 500;
    line-height: 25.2px;
  `,
  body: css`
    font-family: Pretendard;
    font-size: 18px;
    font-weight: 400;
    line-height: 25.2px;
  `,
} as const;
