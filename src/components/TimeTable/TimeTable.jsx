import React from 'react';
// import PropTypes from 'prop-types';
import {
  TimeTableContainer,
  TrackerTable,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableData,
} from './styles';
import Typography from '../Typography';
import useTimeTable from './useTimeTable';

function TimeTable() {
  const {
    isLoading: isLoadingTimesheets,
    data: timeData,
  } = useTimeTable();

  const renderTableHeaders = () => {
    const headers = [
      'DATA',
      'HORA INÍCIO',
      'ALMOÇO INÍCIO',
      'ALMOÇO FIM',
      'HORA FIM',
      'TEMPO',
    ];
    return (
      <TableRow>
        {headers.map((item) => (
          <TableHeader key={item}>
            <Typography
              type="body"
              weight="bold"
              color="tertiary"
            >
              {item}
            </Typography>
          </TableHeader>
        ))}
      </TableRow>
    );
  };

  const renderTableData = () => (
    isLoadingTimesheets ? (
      null
    ) : (
      <>
        {timeData.map((item) => (
          <TableRow key={item.id}>
            <TableData>
              <Typography
                type="body"
                color="secondary"
                weight="bold"
              >
                {item.date}
              </Typography>
            </TableData>
            <TableData>
              <Typography
                type="body"
                color="secondary"
                weight="bold"
              >
                {item.start}
              </Typography>
            </TableData>
            <TableData>
              <Typography
                type="body"
                color="secondary"
                weight="bold"
              >
                {item.startLunch}
              </Typography>
            </TableData>
            <TableData>
              <Typography
                type="body"
                color="secondary"
                weight="bold"
              >
                {item.endLunch}
              </Typography>
            </TableData>
            <TableData>
              <Typography
                type="body"
                color="secondary"
                weight="bold"
              >
                {item.end}
              </Typography>
            </TableData>
            <TableData>
              <Typography
                type="body"
                color="secondary"
                weight="bold"
              >
                {item.totalTime}
              </Typography>
            </TableData>
          </TableRow>
        ))}
      </>
    )
  );

  return (
    <TimeTableContainer>
      <TrackerTable>
        <TableHead>
          {renderTableHeaders()}
        </TableHead>
        <TableBody>
          {renderTableData()}
        </TableBody>
      </TrackerTable>
    </TimeTableContainer>
  );
}

export default TimeTable;
