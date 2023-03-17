import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthService from '../../services/auth';

function PrivateRoute({ children }) {
  const token = AuthService.getToken();
  return token ? children : <Navigate to="/" />;
}

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PrivateRoute;
