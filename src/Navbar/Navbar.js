import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { pizzaRed } from '../Styles/colors';
import { Title } from '../Styles/title';

const NavbarStyled = styled.div`
  background-color: ${pizzaRed};
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 999;
  display: flex;
  align-content: center;
  justify-content: space-between;
`;

const Logo = styled(Title)`
  font-size: 20px;
  color: white;
  text-shadow: 1px 1px 4px #380502;
  @media (max-width: 339px) {
    font-size: 15px;
  }
`;

export const LoginButton = styled.span`
  cursor: pointer;
  border-radius: 5px;
  padding: 5px;
  background-color: #8e8f7f;
  &:hover {
    opacity: 0.7;
  }
`;

export const UserStatus = styled.div`
  color: white;
  font-size: 12px;
  margin-right: 30px;
`;

const HamburgerMenu = styled.div`
  height: 30px;
  width: 30px;
  background-image: url('https://img.icons8.com/metro/26/000000/menu.png');
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 20px;
  @media (min-width: 502px) {
    display: none;
  }
`;

export function Navbar({ login, loggedIn, logout }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <NavbarStyled>
      <Logo>
        Bonfire{' '}
        <span role='img' aria-label='taco'>
          🌮
        </span>
      </Logo>
      <HamburgerMenu />
      <UserStatus>
        {loggedIn === 'loading' ? (
          'Loading...'
        ) : loggedIn ? (
          `👋 Hi, ${loggedIn.displayName}!`
        ) : (
          <LoginButton onClick={login}>Log In / Sign Up</LoginButton>
        )}
      </UserStatus>
    </NavbarStyled>
  );
}
