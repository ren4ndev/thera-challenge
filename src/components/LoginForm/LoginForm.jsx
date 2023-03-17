import React from 'react';
import {
  LoginFormContainer,
  InputContainer,
  Input,
  InputIcon,
} from './styles';
import userIcon from '../../assets/images/usuario.svg';
import passwordIcon from '../../assets/images/senha.svg';
import Button from '../Button';
import Typography from '../Typography';

function LoginForm() {
  return (
    <LoginFormContainer>
      <InputContainer>
        <InputIcon src={userIcon} alt="Ícone de usuário" />
        <Input placeholder="Usuário" />
      </InputContainer>
      <InputContainer>
        <InputIcon src={passwordIcon} alt="Ícone de usuário" />
        <Input placeholder="Senha" />
      </InputContainer>
      <Button>
        <Typography
          type="regular"
          color="secondary"
          weight="bold"
        >
          LOGIN
        </Typography>
      </Button>
    </LoginFormContainer>
  );
}

export default LoginForm;
