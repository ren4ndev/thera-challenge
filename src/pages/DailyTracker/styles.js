/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

const DaylyTrackerContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  min-height: 100vh;
`;

export {
  DaylyTrackerContainer,
};
