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

function TimeTable() {
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

  const renderTableData = () => {
    const data = [
      {
        id: 1,
        date: '24/06/2006',
        start: '08:00',
        startLunch: '12:00',
        endLunch: '13:30',
        end: '17:30',
        totalTime: '08:00',
      },
      {
        id: 2,
        date: '24/06/2006',
        start: '08:00',
        startLunch: '12:00',
        endLunch: '13:30',
        end: '17:30',
        totalTime: '08:00',
      },
    ];

    return (
      <>
        {data.map((item) => (
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
    );
  };

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
