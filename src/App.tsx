import * as React from 'react';
import styled from 'styled-components';

import { colors } from 'styles/colors';

import { Routes, Route, HashRouter, Navigate } from 'react-router-dom';
import { Lifestyle } from 'Pages/lifestyle';
import { Portrait } from 'Pages/portrait';
import { About } from 'Pages/about';
import { Prints } from 'Pages/prints';
import { HamburgerMenu } from 'components/HamburgerMenu'

import { smallTabletMQ } from 'styles/breakpoints';
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

function App() {
  return (
    <Content>
    <Container>
      <HashRouter>
      <Header/>
      <HamburgerMenu /> 
        <Routes>
          <Route path="/portrait" element={<Portrait />}/>
          <Route path="/lifestyle" element={<Lifestyle />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/prints" element={<Prints />}/>
          <Route path="/" element={<Navigate replace to="/portrait" />} />
        </Routes>
      </HashRouter>
    </Container></Content>
  );
}

export default App;
