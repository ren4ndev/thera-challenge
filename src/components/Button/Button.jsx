import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledButton,
} from './styles';

function Button({
  children,
  isActive,
}) {
  return (
    <StyledButton
      isActive={isActive}
    >
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  isActive: PropTypes.bool,
};

Button.defaultProps = {
  isActive: true,
};

export default Button;
