import React from 'react';
import PropTypes from 'prop-types';
import {
  HeaderContainer,
  Logo,
  UserContainer,
  LogoutIcon,
} from './styles';
import logo from '../../assets/images/Logo.svg';
import logout from '../../assets/images/sair.svg';
import Typography from '../Typography';

function Header({
  username,
  handleLogout,
}) {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Thera Solutions logo" />
      <UserContainer>
        <Typography
          type="bold"
          color="primary"
          weight="bold"
        >
          {`Olá, ${username}!`}
        </Typography>
      </UserContainer>
      <LogoutIcon
        src={logout}
        alt="Logout"
        onClick={handleLogout}
      />
    </HeaderContainer>
  );
}

Header.propTypes = {
  username: PropTypes.string.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default Header;
