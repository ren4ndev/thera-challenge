import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledButton,
} from './styles';

function Button({
  children,
}) {
  return (
    <StyledButton>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Button;
