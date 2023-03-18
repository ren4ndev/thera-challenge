import React from 'react';
// import PropTypes from 'prop-types';
import {
  TimeInfoContainer,
  DateInfo,
  TimeClock,
  TimeTracker,
} from './styles';
import Typography from '../Typography';

function TimeInfo() {
  return (
    <TimeInfoContainer>
      <DateInfo>
        <Typography
          type="bold"
          color="primary"
          weight="bold"
        >
          24/06/2006
        </Typography>
      </DateInfo>
      <TimeClock>
        <Typography
          type="bold"
          color="primary"
          weight="bold"
        >
          17:32
        </Typography>
      </TimeClock>
      <TimeTracker>
        <Typography
          type="bold"
          color="tertiary"
          weight="bold"
        >
          07:02:13
        </Typography>
      </TimeTracker>
    </TimeInfoContainer>
  );
}

export default TimeInfo;
