import styled, { css } from 'styled-components';

export const Button = styled.button<{ primary?: boolean; size?: 'small' | 'medium' | 'large'; backgroundColor?: string }>`
  display: inline-block;
  cursor: pointer;
  border: 0;
  border-radius: 3em;
  font-weight: 700;
  line-height: 1;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  
  ${({ primary }) =>
    primary
      ? css`
          background-color: #1ea7fd;
          color: white;
        `
      : css`
          background-color: transparent;
          color: #333;
          box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
        `}

  ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          padding: 10px 16px;
          font-size: 12px;
        `;
      case 'large':
        return css`
          padding: 12px 24px;
          font-size: 16px;
        `;
      case 'medium':
      default:
        return css`
          padding: 11px 20px;
          font-size: 14px;
        `;
    }
  }}

  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${backgroundColor};
    `}
`;
