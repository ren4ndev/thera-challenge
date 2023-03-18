import React from 'react';
import PropTypes from 'prop-types';
import {
  LoginFormContainer,
  InputContainer,
  Input,
  InputIcon,
  Spinner,
} from './styles';
import userIcon from '../../assets/images/usuario.svg';
import passwordIcon from '../../assets/images/senha.svg';
import Button from '../Button';
import Typography from '../Typography';

function LoginForm({
  username,
  onChangeUsername,
  password,
  onChangePassword,
  handleLogin,
  isLoading,
  message,
}) {
  console.log(message);
  return (
    <LoginFormContainer onSubmit={handleLogin}>
      <InputContainer>
        <InputIcon src={userIcon} alt="Ícone de usuário" />
        <Input
          placeholder="Usuário"
          value={username}
          onChange={onChangeUsername}
        />
      </InputContainer>
      <InputContainer>
        <InputIcon src={passwordIcon} alt="Ícone de usuário" />
        <Input
          placeholder="Senha"
          value={password}
          onChange={onChangePassword}
        />
      </InputContainer>
      <Button type="submit">
        <Typography
          type="regular"
          weight="bold"
        >
          {isLoading ? (
            <Spinner />
          ) : (
            'LOGIN'
          )}
        </Typography>
      </Button>
    </LoginFormContainer>
  );
}

LoginForm.propTypes = {
  username: PropTypes.string.isRequired,
  onChangeUsername: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChangePassword: PropTypes.string.isRequired,
  handleLogin: PropTypes.string.isRequired,
  isLoading: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default LoginForm;
