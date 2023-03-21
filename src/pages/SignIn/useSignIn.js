/* eslint-disable no-shadow */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../services/useAuth';

const useSignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

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

    login(username, password)
      .then(
        (response) => {
          if (response.status === 401) {
            setMessage('Usuário ou senha inválidos. Tente novamente');
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
    handleLogin,
    isLoading,
    message,
  };
};

export default useSignIn;
