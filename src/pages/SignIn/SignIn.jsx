import React from 'react';
import {
  SignInContainer,
  Logo,
} from './styles';
import logo from '../../assets/images/Logo.svg';
import LoginForm from '../../components/LoginForm/LoginForm';
import useSignIn from './useSignIn';

function Home() {
  const {
    username,
    onChangeUsername,
    password,
    onChangePassword,
    isEmailValid,
    handleLogin,
    isLoading,
    message,
  } = useSignIn();
  return (
    <SignInContainer>
      <Logo src={logo} alt="Thera Solutions Logo" />
      <LoginForm
        username={username}
        onChangeUsername={onChangeUsername}
        password={password}
        onChangePassword={onChangePassword}
        isEmailValid={isEmailValid}
        handleLogin={handleLogin}
        isLoading={isLoading}
        message={message}
      />
    </SignInContainer>
  );
}

export default Home;
