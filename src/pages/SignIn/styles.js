import styled from 'styled-components';

const SignInContainer = styled.main`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

const Logo = styled.img`
  height: 74px;
  width: 188px;
`;

export {
  SignInContainer,
  Logo,
};
