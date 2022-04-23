import * as React from 'react';
import styled from 'styled-components';

import { colors } from 'styles/colors';

import { Icon } from 'components/Icon';

import linkedin from 'assets/linkedin.png';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Portfolio } from 'Pages/portfolio';
import { About } from 'Pages/about';
import { Contact } from 'Pages/contact'

import { largeMobileMQ, smallTabletMQ } from 'styles/breakpoints';

// import resume from 'resume.json';

const Content = styled.div`
  background-color: ${colors.darkestGrey};
  height: 100%;
`;

const Container = styled.div`
  background-color: ${colors.darkestGrey};
  height: 100%;
  ${smallTabletMQ(`
    overflow: auto;
  `)}
`;

const SubContent = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  flex: 1;
  flex-direction: row;
  overflow: hidden;
  ${smallTabletMQ(`
  overflow: unset;
  `)}
`;

const MainContent = styled.div`
  display: flex;
  align-content: center;
  flex: 4;
  overflow: auto;
  flex-direction: column;
  background-color: ${colors.darkestGrey};
`;

const Summary = styled.h4`
  font-weight: normal;
`;

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
align-self: start;
margin-top:15px;
`;

const EndColumn = styled(Column)`
align-items: flex-end;
flex-direction: row;
justify-content: flex-end;

${smallTabletMQ(`
flex-direction: column;
`)}
`;

const Title = styled.h1`
color: ${colors.white};
font-size: 40px;
margin: 10px 0 10px 0;
align-self: center;
width: 100%;

${smallTabletMQ(`
  font-size: 30px;
`)}
`;

const Subtitle = styled.h4`
color: ${colors.white};
font-weight: lighter;
margin: 0;
font-size: 25px;
text-align: center;
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

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IconRow = styled.div`
padding-top: 20px;
align-self: start;

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
  margin-bottom: 15px;
`;

const StyledLink = styled(Link)`
  font-size: 18px;
  color: ${colors.white};
  text-decoration: none;
  margin-left: 20px;

`;

function App() {
  return (
    <Content>
    <Container>
      <BrowserRouter>
      <HeaderContainer>
        <HeaderContent>
          <TitleContainer>
            <Title>Waheed Khimji</Title>
            <Subtitle>Photographer</Subtitle>
          </TitleContainer>
          <EndColumn>
            <StyledLink to="">Portfolio</StyledLink>
            <StyledLink to="/about">About</StyledLink>
            <StyledLink to="/contact">Contact</StyledLink>
          </EndColumn>
        </HeaderContent>
      </HeaderContainer>
        <Routes>
          <Route path="" element={<Portfolio />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </BrowserRouter>
    </Container></Content>
  );
}

export default App;
