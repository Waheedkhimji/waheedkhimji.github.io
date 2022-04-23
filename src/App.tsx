import * as React from 'react';
import styled from 'styled-components';

import { colors } from 'styles/colors';

import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Lifestyle } from 'Pages/lifestyle';
import { Portrait } from 'Pages/portrait';
import { Landscape } from 'Pages/landscape';
import { About } from 'Pages/about';
import { Prints } from 'Pages/prints';


import { largeMobileMQ, smallTabletMQ } from 'styles/breakpoints';
import { Header } from 'components/Header';

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

const Column = styled.div`
display: flex;
flex-direction: column;
flex: 3;
justify-content: center;
align-items: flex-start;
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

function App() {
  return (
    <Content>
    <Container>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/lifestyle" element={<Lifestyle />}/>
          <Route path="/portrait" element={<Portrait />}/>
          <Route path="/landscape" element={<Landscape />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/prints" element={<Prints />}/>
          <Route path="/" element={<Navigate replace to="/lifestyle" />} />
        </Routes>
      </BrowserRouter>
    </Container></Content>
  );
}

export default App;
