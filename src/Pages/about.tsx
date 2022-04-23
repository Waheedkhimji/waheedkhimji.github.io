import * as React from 'react';
import styled from 'styled-components';
import { colors } from 'styles/colors';
import linkedin from 'assets/linkedin.png'
import phone from 'assets/phone-outline.png'
import email from 'assets/white-mail-icon-4.jpeg'

import { largeMobileMQ } from 'styles/breakpoints';

const Title = styled.h2`
  color: ${colors.white};
  margin: 0 0 25px 0;
  text-align: center;
`;

const Subtitle = styled.h5`
  color: ${colors.grey};
  margin: 3px 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 30px;

  ul {
    ${largeMobileMQ(`
        padding-inline-start: 15px;
    `)}
  }

  li {
    margin-bottom: 15px;
  }
`;

const TextContainer = styled.div`
  flex: 1;
`;
const ContactContainer = styled.div`
  flex: 1;
  padding-left: 40px;
  flex-direction: row;
`;

const Column = styled.div`
  flex: 5;
  flex-direction: row;
`;

const IconContainer = styled.div`
  flex: 1;
`;

const InfoContainer = styled.div`
  flex: 3;
`;

const Icon = styled.img`
  width: 15px;
`;

export const About: React.FC = () => {
  return (
    <Container>
      <TextContainer>
        <Title>About</Title>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </TextContainer>
      <ContactContainer>
        <Title>Contact</Title>
        <InfoContainer>
        <Icon src={linkedin} /> 
        <Icon src={phone} /> 
        <Icon src={email} /> 
        </InfoContainer>
      </ContactContainer>
    </Container>
  )
};
