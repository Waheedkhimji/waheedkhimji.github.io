import * as React from "react";
import styled from 'styled-components';
import { useLocation, NavLink } from 'react-router-dom';
import { colors } from 'styles/colors';

import wkLogo from 'assets/wk-logo.jpg'

import {
  smallTabletMQ,
} from 'styles/breakpoints';

 const StyledLink = styled(NavLink)<{ isActive: boolean }>`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
	text-decoration: ${({ isActive }) => (
		isActive ? 'underline 2px' : 'none'
	)};
	color: ${({ isActive }) => (
		isActive ? colors.white : colors.lightGrey
	)};
  text-decoration: none;
  transition: max-height 0.3s ease-in;
  margin: 5px 0;
 `;

 const HamburgerContainer = styled.div`
  font-style: normal;
  align-self: center;
  font-weight: normal;
  font-size: 14px;
  color: ${colors.lightGrey};
  flex: 1;
 `;

const Nav = styled.div`
  display: none;

  ${smallTabletMQ(`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px 25px;
  `)}
`;

const Title = styled.h2`
	color: ${colors.white};
	align-self: center;
  text-align: center;
	width: 100%;
  margin: 0 0 5px 0;
  flex: 2;
`;

const Menu = styled.div<{isOpen: boolean}>`
  display: none;
  justify-content: space-between;
  align-items: center;
  position: relative;

  ${smallTabletMQ(`
    display: flex;
    overflow: hidden;
    flex-direction: column;
    transition: max-height 0.3s ease-in;
    border-bottom: grey solid 1px;
    width: 100%;
    padding-bottom: 5px;
  `)};

  ${({ isOpen }) => isOpen ? `
    max-height: 300px;
  ` : `
    max-height: 0px;
  `}
`;

const Hamburger = styled.div`
  display: none;
  span {
    height: 2px;
    width: 25px;
    background: ${colors.grey};
    margin-bottom: 4px;
    border-radius: 5px;
  }
  ${smallTabletMQ(`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    align-items: end;
  `)}
`;

const MobileMenuContainer = styled.div`
  display: none;

  ${smallTabletMQ(`
    flex-direction: row;
    display: flex;
    visibility: visible;
    justify-content: space-between;
    width: 100%;
  `)}
`;

const LogoContainer = styled.div`
  display: flex;
  flex: 1;
`;

const Logo = styled.img`
  max-width: 50px;
  align-self: center;
  height: auto;
	mix-blend-mode: lighten; 
`;

export const HamburgerMenu = () => {
    const location = useLocation();

    const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Nav>
      <MobileMenuContainer>
        <LogoContainer>
          <Logo src={wkLogo} />
        </LogoContainer>
        <Title>Waheed Khimji</Title>

        <HamburgerContainer>
          <Hamburger onClick={() => setIsOpen(!isOpen)}>
            <span/>
            <span/>
            <span/>
          </Hamburger>
        </HamburgerContainer>

      </MobileMenuContainer>

      <Menu isOpen={isOpen}>
        <StyledLink to="/lifestyle" isActive={location.pathname.includes("/lifestyle")} 
        onClick={() => setIsOpen(false)}>
            Lifestyle
        </StyledLink>
        <StyledLink to="/portrait" isActive={location.pathname.includes("/portrait")}
        onClick={() => setIsOpen(false)}>
            Portrait
        </StyledLink>
        <StyledLink to="/about" isActive={location.pathname.includes("/about")}
        onClick={() => setIsOpen(false)}>
            About
        </StyledLink>
        <StyledLink to="/prints" isActive={location.pathname.includes("/prints")}
        onClick={() => setIsOpen(false)}>
            Prints (coming soon!)
        </StyledLink>
      </Menu>
  </Nav>
  );
}