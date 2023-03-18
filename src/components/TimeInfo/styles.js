import styled from 'styled-components';

const TimeInfoContainer = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  padding: 20px 0 23px;
  height: auto;
  justify-content: center;
  width: 100%;
`;

const DateInfo = styled.div`
  font-family: ${({ theme }) => theme.fonts.sans};
  margin-right: 37px;
`;

const TimeClock = styled.div`
  font-family: ${({ theme }) => theme.fonts.sans};
  margin-right: 85px;
`;

const TimeTracker = styled.div`
  font-family: ${({ theme }) => theme.fonts.sans};
`;

export {
  TimeInfoContainer,
  DateInfo,
  TimeClock,
  TimeTracker,
};
