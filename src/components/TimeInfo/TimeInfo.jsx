import React from 'react';
import PropTypes from 'prop-types';
import {
  TimeInfoContainer,
  DateInfo,
  TimeClock,
  TimeTracker,
} from './styles';
import Typography from '../Typography';

function TimeInfo({
  date,
  time,
  stopwacth,
}) {
  return (
    <TimeInfoContainer>
      <DateInfo>
        <Typography
          type="bold"
          color="primary"
          weight="bold"
        >
          {date}
        </Typography>
      </DateInfo>
      <TimeClock>
        <Typography
          type="bold"
          color="primary"
          weight="bold"
        >
          {time}
        </Typography>
      </TimeClock>
      <TimeTracker>
        <Typography
          type="bold"
          color="tertiary"
          weight="bold"
        >
          {stopwacth}
        </Typography>
      </TimeTracker>
    </TimeInfoContainer>
  );
}

TimeInfo.propTypes = {
  date: PropTypes.string,
  time: PropTypes.string,
  stopwacth: PropTypes.string,
};

TimeInfo.defaultProps = {
  date: '24/06/2006',
  time: '17:32',
  stopwacth: '07:06:32',
};

export default TimeInfo;
