import React from 'react';
import styled from 'styled-components';
import { pizzaRed } from '../Styles/colors';
import { Title } from '../Styles/title';

const NavbarStyled = styled.div`
  background-color: ${pizzaRed};
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 999;
`;

const Logo = styled(Title)`
  font-size: 20px;
  color: white;
  text-shadow: 1px 1px 4px #380502;
`;

const MobileMenuIcon = styled.div`
  margin: auto 0 auto auto;
  width: 25px;
  min-width: 25px;
  padding: 5px;
  > {
    height: 3px;
    background: black;
    margin: 5px 0;
    width: 100%;
  }
`;

export function Navbar() {
  return (
    <NavbarStyled>
      <Logo>
        Rawr Pizza Co.{' '}
        <span role='img' aria-label='pizza slice'>
          🍕
        </span>
      </Logo>
      <MobileMenuIcon>
        <div />
        <div />
        <div />
      </MobileMenuIcon>
    </NavbarStyled>
  );
}
