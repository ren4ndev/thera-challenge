/* eslint-disable no-shadow */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../services/useAuth';
import useValidate from '../../utils/useValidate';

const useSignIn = () => {
  const [username, setUsername] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();
  const { login } = useAuth();
  const {
    validateEmail,
  } = useValidate();

  const handleError = (message) => {
    setMessage(message);
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  };

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setIsEmailValid(validateEmail(username));
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    login(username, password)
      .then(
        (response) => {
          if (response.status === 401) {
            handleError('Usuário ou senha inválidos. Tente novamente');
            setIsLoading(false);
            return;
          }
          navigate('/tracker');
          window.location.reload();
        },
      );
  };

  return {
    username,
    onChangeUsername,
    password,
    onChangePassword,
    isEmailValid,
    handleLogin,
    isLoading,
    message,
  };
};

export default useSignIn;
