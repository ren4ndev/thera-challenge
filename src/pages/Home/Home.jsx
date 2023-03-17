import React from 'react';
import {
  SignInContainer,
  Logo,
} from './styles';
import logo from '../../assets/images/Logo.svg';
import LoginForm from '../../components/LoginForm/LoginForm';

function Home() {
  return (
    <SignInContainer>
      <Logo src={logo} alt="Thera Solutions Logo" />
      <LoginForm />
    </SignInContainer>
  );
}

export default Home;
