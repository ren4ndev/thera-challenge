/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

const TimeActionsContainer = styled.section`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  padding: 20px 0 31px;
  height: auto;
  justify-content: center;
  width: 100%;
`;

export {
  TimeActionsContainer,
};
