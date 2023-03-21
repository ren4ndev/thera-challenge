import React from 'react';
import PropTypes from 'prop-types';
import {
  PopupErrorContainer,
  ErrorIcon,
} from './styles';
import errorIcon from '../../assets/images/error.svg';
import Typography from '../Typography';

function PopupError({
  message,
}) {
  return (
    <PopupErrorContainer show={message}>
      <ErrorIcon src={errorIcon} alt="Erro" />
      <Typography
        color="quarternary"
        type="caption"
      >
        {message}
      </Typography>
    </PopupErrorContainer>
  );
}

PopupError.propTypes = {
  message: PropTypes.string.isRequired,
};

export default PopupError;
