/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

const StyledButton = styled.button`
  align-items: center;
  background-color: ${({ theme, isActive }) => {
    if (isActive) return theme.colors.tertiary;
    return theme.colors.secondary;
  }};
  border: ${({ theme, isActive }) => {
    if (isActive) return 'none';
    return `4px solid ${theme.colors.tertiary}`;
  }};
  border-radius: 5px;
  color: ${({ theme, isActive }) => {
    if (isActive) return theme.colors.secondary;
    return theme.colors.primary;
  }};
  cursor: pointer;
  display: flex;
  font-family: ${({ theme }) => theme.fonts.sans};
  height: 63px;
  justify-content: center;
  margin: 0 10px;
  padding: 11px 29px;
  min-width: 189px;
`;

export {
  StyledButton,
};
