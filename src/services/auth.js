/* eslint-disable import/no-cycle */
import api from './api';

const login = (username, password) => (
  api
    .post('/api/Accounts', {
      userID: username,
      accessKey: password,
      grantType: 'password',
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }

      return response.data;
    })
);

const logout = () => {
  localStorage.removeItem('user');
};

const getCurrentUser = () => JSON.parse(localStorage.getItem('user'));

const getToken = () => {
  const user = getCurrentUser();
  if (user) {
    return user.accessToken;
  }
  return null;
};

const AuthService = {
  login,
  logout,
  getCurrentUser,
  getToken,
};

export default AuthService;
