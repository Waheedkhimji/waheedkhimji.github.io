import * as React from 'react';
import styled from 'styled-components';

import { colors } from 'styles/colors';

import { Icon } from 'components/Icon';

import linkedin from 'assets/linkedin.png';
import { Routes, Route, Link } from 'react-router-dom';
import { Portfolio } from 'Pages/portfolio';
import { About } from 'Pages/about';
import { Contact } from 'Pages/contact'

import { largeMobileMQ, smallTabletMQ } from 'styles/breakpoints';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.darkestGrey};
  height: 120px;
  padding: 10px 100px 10px 100px;

  ${smallTabletMQ(`
    padding: 0 15px 20px;
    max-height: 100px;
  `)}

  ${largeMobileMQ(`
    padding: 0 10px 10px;
  `)}
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  justify-content: center;
  align-items: flex-start;
`;

const FullColumn = styled(Column)`
  width: 100%;
  ${smallTabletMQ(`
  margin-top: 15px;
  `)}
`;

const EndColumn = styled(Column)`
  align-items: flex-end;
  flex-direction: row;

  ${smallTabletMQ(`
  flex-direction: column;
  `)}
`;

const Title = styled.h1`
  color: ${colors.white};
  font-size: 40px;
  margin: 10px 0 15px 0;
  align-self: center;
  width: 100%;

  ${smallTabletMQ(`
    font-size: 30px;
  `)}
`;

const Subtitle = styled.h4`
  color: ${colors.darkGrey};
  font-weight: lighter;
  margin: 0 0 5px 0;
  font-size: 35px;
  width: 100%;

  ${smallTabletMQ(`
    font-size: 16px;
    margin: 15px 0 5px 0;
  `)}

  ${largeMobileMQ(`
    font-size: 16px;
  `)}
`;

const SubtitleSmall = styled(Subtitle)`
  font-size: 25px;
  display: flex;
  margin: 0;

  ${smallTabletMQ(`
    font-size: 18px;
    display: flex;
    margin: 0;
  `)}
`;

const ContactSubtitle = styled(Subtitle)`
  margin: 3px 0;
  font-size: 15px;
  text-align: end;
  ${largeMobileMQ(`
    font-size: 12px;
  `)}

${smallTabletMQ(`
    margin: 3px 0;
    font-size: 12px;
  `)}
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const IconRow = styled(Row)`
  padding-top: 5px;

${smallTabletMQ(`
  padding-top: 0;
`)}
`;

const BlackBackgroundIcon = styled.div`
  background-color: ${colors.white};
  padding: 10px;
  height: 20px;
  width: 20px;
  border-radius: 100%;
  margin-left: 15px;

  ${smallTabletMQ(`
    height: 10px;
    width: 10px;
  `)}
`;

const TitleContainer = styled.div`
  flex-direction: row;
`;


export const Header: React.FC = () => {
  // function importAll(r) {
  //   r.keys().forEach(r);
  // }
  // importAll(require.context('assets', false, /\.jpg\.svg\.png$/))
  return (
    <HeaderContainer>
      <Row>
        <TitleContainer>
          <Title>Jeeya Mehta</Title>
          <SubtitleSmall>Full Stack Developer</SubtitleSmall>
            <li>
              <Link to="/portfolio">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <Routes>
              <Route path="/portfolio" element={<Portfolio />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/contact" element={<Contact />}/>
            </Routes>
        </TitleContainer>
        <EndColumn>
          <FullColumn>
            <ContactSubtitle>jeeyamehta13@gmail.com</ContactSubtitle>
            <ContactSubtitle>647-460-7640</ContactSubtitle>
          </FullColumn>
          <IconRow>
            <BlackBackgroundIcon>
              <Icon link="https://www.linkedin.com/in/jeeyamehta/" src={linkedin} width={25} />
            </BlackBackgroundIcon>
          </IconRow>
        </EndColumn>
      </Row>
    </HeaderContainer>
  )
};
