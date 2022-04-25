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

const Subtitle = styled.h5`
  color: ${colors.grey};
  margin: 3px 0;
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

const IconContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const InfoContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
`;

const AboutContainer = styled.div`
  color: ${colors.white};
  padding-bottom: 10px;
  line-height: 1.5;
`;

const InfoDetail = styled.div`
  color: white;
  font-size: 18px;
  margin-bottom: 30px;
`;

const Icon = styled.img`
  width: 20px;
  padding-bottom: 30px;
  filter: invert(1);
`;

const WhiteIcon = styled.img`
  width: 25px;
  padding-bottom: 25px;
`;

export const About: React.FC = () => {
  return (
    <Container>
      <TextContainer>
        <Title>About</Title>
        <AboutContainer>
          Lorem ipsum dolor sit amet. 
          Qui galisum excepturi qui minima et voluptatem animi! Ut culpa consequatur est molestiae modi 
          id minima animi At dolorem adipisci. Nam internos eius et quod cupiditate qui eveniet repellat 
          ut nemo maiores et velit magni! 
        </AboutContainer>

          <AboutContainer>
          Qui quia consectetur eum atque dolorem et deleniti omnis et consequatur voluptatem At 
          mollitia eligendi ex consequatur nesciunt eum quasi sunt. Et perferendis culpa in dolorem 
          alias non quisquam cupiditate quo molestiae dolor aut autem voluptatem? Et laborum provident 
          ut Quis minima sit molestias recusandae aut illum esse. Quo delectus dignissimos aut laboriosam 
          porro vel quis nihil ut maiores accusantium est iure deleniti.
        </AboutContainer>
      </TextContainer>
      <ContactContainer>
        <Title>Contact</Title>
        <ContactInfoContainer>
          <IconContainer>
            <WhiteIcon src={instagram} /> 
            <Icon src={phone} /> 
            <Icon src={email} /> 
            <Icon src={linkedin} /> 
          </IconContainer>
          <InfoContainer>
            <InfoDetail>@wk_studi0s</InfoDetail>
            <InfoDetail>(416)837-0033</InfoDetail>
            <InfoDetail>waheedkhimji@yahoo.com</InfoDetail>
            <InfoDetail>linkedin.com/waheedkhimji</InfoDetail>
          </InfoContainer>
        </ContactInfoContainer>
      </ContactContainer>
    </Container>
  )
};
