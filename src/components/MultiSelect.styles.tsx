import styled from 'styled-components';

export const MultiSelectContainer = styled.div`
background-color: #e3eaea;
  display: inline-block;
  position: relative;
  width: 600px;
  outline: none;
`;

export const MultiSelectInput = styled.div`
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
  border: 3px solid #6a0909;
  border-radius: 4px;
  padding: 4px;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  background-color: thistle;
  color: black;
`;

export const Chip = styled.div`
  background-color: #e0e0e0;
  border-radius: 16px;
  padding: 4px 8px;
  margin-right: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Total = styled.span`
  margin-left: auto;
  font-weight: bold;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: thistle;
  color: black;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-height: 200px;
  overflow-y: auto;
  z-index: 10;
`;

export const DropdownItem = styled.div`
  padding: 8px;
  cursor: pointer;

  &.selected {
    background-color: #f0f0f0;
    font-weight: bold;
  }

  &:hover {
    background-color: #e0e0e0;
  }
`;
