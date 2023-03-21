import React from 'react';
import PropTypes from 'prop-types';
import {
  TimeActionsContainer,
} from './styles';
import Typography from '../Typography';
import Button from '../Button';

function TimeActions({
  status,
  onPressArrived,
  onPressLunch,
  onPressReturned,
  onPressEnd,
}) {
  return (
    <TimeActionsContainer>
      <Button
        isActive={status === 'arrived'}
        onClick={onPressArrived}
      >
        <Typography
          type="bold"
          weight="bold"
        >
          CHEGUEI
        </Typography>
      </Button>
      <Button
        isActive={status === 'lunch'}
        onClick={onPressLunch}
      >
        <Typography
          type="bold"
          weight="bold"
        >
          FUI ALMOÇAR
        </Typography>
      </Button>
      <Button
        isActive={status === 'back'}
        onClick={onPressReturned}
      >
        <Typography
          type="bold"
          weight="bold"
        >
          VOLTEI
        </Typography>
      </Button>
      <Button
        isActive={status === 'ended'}
        onClick={onPressEnd}
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

TimeActions.propTypes = {
  status: PropTypes.string.isRequired,
  onPressArrived: PropTypes.func.isRequired,
  onPressLunch: PropTypes.func.isRequired,
  onPressReturned: PropTypes.func.isRequired,
  onPressEnd: PropTypes.func.isRequired,
};

export default TimeActions;
