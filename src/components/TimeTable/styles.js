/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

const TimeTableContainer = styled.section`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  padding: 30px 0;
  height: auto;
  justify-content: center;
  width: 100%;
`;

const TrackerTable = styled.table`
  font-family: ${({ theme }) => theme.fonts.sans};
  max-width: 80%;
  min-width: 1150px;
`;

const TableHead = styled.thead`

`;

const TableBody = styled.tbody`
  tr:nth-child(odd) {
    background-color: ${({ theme }) => theme.colors.primary};
  }
  tr:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;

const TableRow = styled.tr`

`;

const TableHeader = styled.th`
  padding: 20px 50px 0 0;
  text-align: left;
  vertical-align: bottom;
`;

const TableData = styled.td`
  border: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
  padding: 20px;
`;

export {
  TimeTableContainer,
  TrackerTable,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableData,
};
