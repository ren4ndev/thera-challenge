import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import useAuth from '../../services/useAuth';

function PrivateRoute({ children }) {
  const { getToken } = useAuth();
  const token = getToken();
  return token ? children : <Navigate to="/" />;
}

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PrivateRoute;
