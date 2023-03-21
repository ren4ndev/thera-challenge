import styled from 'styled-components';

const HeaderContainer = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  padding: 54px 56px 23px;
  height: auto;
  justify-content: space-between;
  width: 100%;
`;

const Logo = styled.img`
  width: 116px;
`;

const LogoutIcon = styled.img`
  cursor: pointer;
  height: 48px;
  width: 48px;
`;

const UserContainer = styled.div`
  font-family: ${({ theme }) => theme.fonts.sans};
  margin-left: 94px;
  margin-right: auto;
`;

export {
  HeaderContainer,
  Logo,
  UserContainer,
  LogoutIcon,
};
