/* eslint-disable no-shadow */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../services/auth';

const useSignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage();
    setIsLoading(true);

    AuthService.login(username, password).then(
      () => {
        navigate('/tracker');
        window.location.reload();
      },
      (error) => {
        const resMessage = (
          error.response
          && error.response.data
          && error.response.data.message)
          || error.message
          || error.toString();

        setIsLoading(false);
        setMessage(resMessage);
      },
    );
  };

  return {
    username,
    onChangeUsername,
    password,
    onChangePassword,
    handleLogin,
    isLoading,
    message,
  };
};

export default useSignIn;
