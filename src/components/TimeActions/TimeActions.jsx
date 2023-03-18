import React from 'react';
// import PropTypes from 'prop-types';
import {
  TimeActionsContainer,
} from './styles';
import Typography from '../Typography';
import Button from '../Button';

function TimeInfo() {
  return (
    <TimeActionsContainer>
      <Button
        isActive
        onClick={() => null}
      >
        <Typography
          type="bold"
          weight="bold"
        >
          CHEGUEI
        </Typography>
      </Button>
      <Button
        isActive={false}
        onClick={() => null}
      >
        <Typography
          type="bold"
          weight="bold"
        >
          FUI ALMOÇAR
        </Typography>
      </Button>
      <Button
        isActive={false}
        onClick={() => null}
      >
        <Typography
          type="bold"
          weight="bold"
        >
          VOLTEI
        </Typography>
      </Button>
      <Button
        isActive={false}
        onClick={() => null}
      >
        <Typography
          type="bold"
          weight="bold"
        >
          FUI
        </Typography>
      </Button>
    </TimeActionsContainer>
  );
}

export default TimeInfo;
