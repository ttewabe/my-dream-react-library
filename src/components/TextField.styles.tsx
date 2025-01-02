import styled from 'styled-components';

export const TextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin-bottom: 16px;
`;

export const TextFieldInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  font-size: 16px;
  color: #333;
  box-sizing: border-box;

  &:focus {
    border-color: blue;
    outline: none;
  }
`;

export const Label = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

export const Placeholder = styled.span`
  color: #aaa;
  font-size: 14px;
`;