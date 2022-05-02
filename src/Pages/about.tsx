import * as React from 'react';
import styled from 'styled-components';
import { colors } from 'styles/colors';
import linkedin from 'assets/linkedin.png'
import phone from 'assets/phone-outline.png'
import email from 'assets/white-mail-icon-4.jpeg'
import instagram from 'assets/instagram.png'

import { largeTabletMQ } from 'styles/breakpoints';

const Title = styled.h2`
  color: ${colors.white};
  margin: 0 0 25px 0;
  text-align: center;
  ${largeTabletMQ(`
    text-align: start;
  `)}
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 30px;

  ${largeTabletMQ(`
    flex-direction: column;
    padding: 10px 30px;
  `)}
`;

const TextContainer = styled.div`
  flex: 1;
  margin: 0 15px;
  ${largeTabletMQ(`
    margin: 0;
  `)}
`;
const ContactContainer = styled.div`
  flex: 1;
  padding-left: 80px;
  flex-direction: row;
  ${largeTabletMQ(`
    padding: 40px 0 0 0;
  `)}
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const InfoContainer = styled.div`
  display: flex;
  padding-bottom: 25px;
  flex-direction: row;
`;

const LinkInfoContainer = styled.a`
  display: flex;
  padding-bottom: 25px;
  flex-direction: row;
  text-decoration: white underline 1px;
`;

const AboutContainer = styled.div`
  color: ${colors.white};
  padding-bottom: 10px;
  line-height: 1.5;
`;

const InfoDetail = styled.div`
  color: white;
  padding-left: 40px;
  flex: 3;
  font-size: 18px;
`;

const Icon = styled.img`
  width: 20px;
`;

const WhiteIcon = styled(Icon)`
  filter: invert(1);
`;

export const About: React.FC = () => {
  return (
    <Container>
      <TextContainer>
        <Title>About</Title>
        <AboutContainer>
        I am a sixteen year-old student who lives in Toronto, Ontario.
        My background is East African, Although I am born in Canada. 
        </AboutContainer>
        
          <AboutContainer>
          I am a very outdoorsy person. I play competivite Baseball and Vollyball. 
        I love biking and I love exercise. I have been taking photos since I was 10, 
        Taking photos has always been a big passion of mine, I love to capture moments in time 
        and preserve them for the rest of the world to see.
          

        </AboutContainer>
      </TextContainer>
      <ContactContainer>
        <Title>Contact</Title>
        <ContactInfoContainer>
          <DetailsContainer>
            <LinkInfoContainer  href='https://instagram.com/wk_studi0s' target="_blank">
              <Icon src={instagram} /> 
              <InfoDetail>@wk_studi0s</InfoDetail>
            </LinkInfoContainer>
            <InfoContainer>
              <WhiteIcon src={phone} /> 
              <InfoDetail>(416)837-0033</InfoDetail>
            </InfoContainer>
            <InfoContainer>
              <WhiteIcon src={email} /> 
              <InfoDetail>waheedkhimji@yahoo.com</InfoDetail>
            </InfoContainer>
            <LinkInfoContainer href='https://linkedin.com/in/waheedkhimji' target="_blank">
              <WhiteIcon src={linkedin} /> 
              <InfoDetail>linkedin.com/waheedkhimji</InfoDetail>
            </LinkInfoContainer>
          </DetailsContainer>
        </ContactInfoContainer>
      </ContactContainer>
    </Container>
  )
};
