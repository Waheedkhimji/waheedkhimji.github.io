import * as React from 'react';
import { useLocation, NavLink } from 'react-router-dom';

import styled from 'styled-components';

import { colors } from 'styles/colors';

import wkLogo from 'assets/wk-logo.jpg'

import { largeMobileMQ, smallTabletMQ } from 'styles/breakpoints';

const HeaderContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${colors.darkestGrey};
	padding: 20px;

	${smallTabletMQ(`
		padding: 0 15px 20px;
        display: none;
	`)}

	${largeMobileMQ(`
		padding: 0 10px 10px;
	`)}
`;

const HeaderContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Column = styled.div`
	display: flex;
	flex-direction: column;
	flex: 3;
	justify-content: center;
	align-items: flex-start;
`;

const EndColumn = styled(Column)`
	align-items: flex-end;
	flex-direction: row;
	background-color: ${colors.darkGrey};
	padding: 10px 50px 10px 10px;
`;

const Title = styled.h1`
	color: ${colors.white};
	font-size: 40px;
	margin: 10px 0 0 0;
	align-self: center;
	width: 100%;
`;

const Subtitle = styled.h4`
    color: ${colors.white};
    font-weight: lighter;
    margin: 0;
    font-size: 25px;
    text-align: center;
    width: 100%;
`;

const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

const TitleContainer = styled.div`
	flex-direction: row;
	margin-bottom: 25px;

`;

const StyledLink = styled(NavLink)<{ isActive: boolean }>`
	font-size: 18px;
	text-decoration: ${({ isActive }) => (
		isActive ? 'underline 2px' : 'none'
	)};
	margin-left: 40px;
	color: ${({ isActive }) => (
		isActive ? colors.white : colors.lightGrey
	)};
`;

const Logo = styled.img`
	width: 150px;
	mix-blend-mode: lighten; 
	position: fixed;
`;

export const Header: React.FC = () => {
	const location = useLocation();
	return (
		<HeaderContainer>
			<Logo src={wkLogo} />
			<HeaderContent>
				<TitleContainer>
					<Title>Waheed Khimji</Title>
					<Subtitle>Photographer</Subtitle>
				</TitleContainer>
				<EndColumn>
					<StyledLink to="/lifestyle" isActive={location.pathname.includes("/lifestyle")}>
							Lifestyle
					</StyledLink>
					<StyledLink to="/portrait" isActive={location.pathname.includes("/portrait")}>
							Portrait
					</StyledLink>
					<StyledLink to="/landscape" isActive={location.pathname.includes("/landscape")}>
							Landscape
							</StyledLink>
					<StyledLink to="/about" isActive={location.pathname.includes("/about")}>
							About
					</StyledLink>
					<StyledLink to="/prints" isActive={location.pathname.includes("/prints")}>
							Prints (coming soon!)
					</StyledLink>
				</EndColumn>
			</HeaderContent>
		</HeaderContainer>
	)
};
