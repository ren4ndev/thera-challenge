import styled from 'styled-components';

const LoginFormContainer = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 107px 0 14px 0;
`;

const InputContainer = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 34px;
  padding-right: 73px;
`;

const Input = styled.input`
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.quarternary};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 26px;
  height: 63px;
  line-height: 36px;
  padding: 13px 24px;
  width: 378px;
`;

const InputIcon = styled.img`
  height: 50px;
  margin-right: 23px;
  width: 50px;
`;

const Spinner = styled.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export {
  LoginFormContainer,
  InputContainer,
  Input,
  InputIcon,
  Spinner,
};
