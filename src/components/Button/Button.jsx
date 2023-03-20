import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledButton,
} from './styles';

function Button({
  children,
  isActive,
  onClick,
}) {
  return (
    <StyledButton
      isActive={isActive}
      onClick={onClick}
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
  onClick: PropTypes.func,
};

Button.defaultProps = {
  isActive: true,
  onClick: () => null,
};

export default Button;
