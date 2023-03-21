import React from 'react';
import PropTypes from 'prop-types';
import {
  LoginFormContainer,
  InputContainer,
  InputWrapper,
  Input,
  InputIcon,
  ErrorIcon,
  Spinner,
} from './styles';
import userIcon from '../../assets/images/usuario.svg';
import passwordIcon from '../../assets/images/senha.svg';
import errorIcon from '../../assets/images/error.svg';
import Button from '../Button';
import Typography from '../Typography';
import PopupError from '../PopupError';

function LoginForm({
  username,
  onChangeUsername,
  password,
  onChangePassword,
  isEmailValid,
  handleLogin,
  isLoading,
  message,
}) {
  return (
    <LoginFormContainer onSubmit={handleLogin}>
      <InputContainer>
        <InputIcon src={userIcon} alt="Ícone de usuário" />
        <InputWrapper>
          <Input
            placeholder="Usuário"
            value={username}
            onChange={onChangeUsername}
          />
          <ErrorIcon
            src={errorIcon}
            alt="Erro de validação"
            isValid={isEmailValid}
          />
        </InputWrapper>
      </InputContainer>
      <InputContainer>
        <InputIcon src={passwordIcon} alt="Ícone de usuário" />
        <InputWrapper>
          <Input
            placeholder="Senha"
            value={password}
            onChange={onChangePassword}
            type="password"
          />
          <ErrorIcon
            src={errorIcon}
            alt="Erro de validação"
            isValid
          />
        </InputWrapper>
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
      <PopupError message={message} />
    </LoginFormContainer>
  );
}

LoginForm.propTypes = {
  username: PropTypes.string.isRequired,
  onChangeUsername: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  isEmailValid: PropTypes.bool.isRequired,
  handleLogin: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  message: PropTypes.string,
};

LoginForm.defaultProps = {
  message: null,
};

export default LoginForm;
