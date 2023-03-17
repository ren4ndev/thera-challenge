/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

const StyledButton = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.tertiary};
  border: none;
  border-radius: 5px;
  display: flex;
  font-family: ${({ theme }) => theme.fonts.sans};
  height: 63px;
  justify-content: center;
  width: 189px;
`;

export {
  StyledButton,
};
